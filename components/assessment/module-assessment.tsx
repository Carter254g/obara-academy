'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../ui/button'
import {
    MODULE_1_MAX_VIOLATIONS,
    MODULE_1_PASSING_SCORE,
    MODULE_1_RETRY_COOLDOWN_SECONDS,
    MODULE_1_TIME_LIMIT_SECONDS,
    module1Assessment,
} from '../../lib/module-1-assessment'

const INSTRUCTOR_EMAIL = 'obarasamwel48@gmail.com'
const STORAGE_KEY = 'obara-module-1-assessment'

type Stage = 'intro' | 'in-progress' | 'results'

interface StoredAttempt {
    studentName: string
    studentEmail: string
    score: number
    passed: boolean
    submittedAt: number
}

function loadStoredAttempt(): StoredAttempt | null {
    if (typeof window === 'undefined') return null
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as StoredAttempt) : null
    } catch {
        return null
    }
}

function saveStoredAttempt(attempt: StoredAttempt) {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempt))
}

function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

interface ModuleAssessmentProps {
    onPassed: () => void
}

export function ModuleAssessment({ onPassed }: ModuleAssessmentProps) {
    const [stage, setStage] = useState<Stage>('intro')
    const [studentName, setStudentName] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [secondsLeft, setSecondsLeft] = useState(MODULE_1_TIME_LIMIT_SECONDS)
    const [violationCount, setViolationCount] = useState(0)
    const [showViolationWarning, setShowViolationWarning] = useState(false)
    const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null)
    const [priorAttempt, setPriorAttempt] = useState<StoredAttempt | null>(null)

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const stageRef = useRef(stage)
    stageRef.current = stage

    useEffect(() => {
        setPriorAttempt(loadStoredAttempt())
    }, [])

    // Timer
    useEffect(() => {
        if (stage !== 'in-progress') return

        timerRef.current = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current)
                    submitAssessment()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage])

    // Tab-switch / window-blur violation detection
    useEffect(() => {
        if (stage !== 'in-progress') return

        const handleBlur = () => {
            if (stageRef.current !== 'in-progress') return
            setViolationCount((prev) => {
                const next = prev + 1
                if (next >= MODULE_1_MAX_VIOLATIONS) {
                    submitAssessment()
                } else {
                    setShowViolationWarning(true)
                }
                return next
            })
        }

        window.addEventListener('blur', handleBlur)
        return () => window.removeEventListener('blur', handleBlur)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage])

    // Disable copy/paste/right-click during the test
    useEffect(() => {
        if (stage !== 'in-progress') return

        const prevent = (e: Event) => e.preventDefault()
        document.addEventListener('copy', prevent)
        document.addEventListener('paste', prevent)
        document.addEventListener('contextmenu', prevent)
        return () => {
            document.removeEventListener('copy', prevent)
            document.removeEventListener('paste', prevent)
            document.removeEventListener('contextmenu', prevent)
        }
    }, [stage])

    const cooldownRemaining = useMemo(() => {
        if (!priorAttempt || priorAttempt.passed) return 0
        const elapsed = (Date.now() - priorAttempt.submittedAt) / 1000
        const remaining = MODULE_1_RETRY_COOLDOWN_SECONDS - elapsed
        return remaining > 0 ? Math.ceil(remaining) : 0
    }, [priorAttempt])

    const handleStart = () => {
        if (!studentName.trim() || !studentEmail.trim()) return
        setCurrentIndex(0)
        setAnswers({})
        setSecondsLeft(MODULE_1_TIME_LIMIT_SECONDS)
        setViolationCount(0)
        setShowViolationWarning(false)
        setResult(null)
        setStage('in-progress')

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {
                // Fullscreen is best-effort; ignore rejection (user gesture requirements, unsupported browsers, etc.)
            })
        }
    }

    const handleSelect = (optionId: string) => {
        const question = module1Assessment[currentIndex]
        setAnswers((prev) => ({ ...prev, [question.id]: optionId }))
    }

    const handleNext = () => {
        if (currentIndex < module1Assessment.length - 1) {
            setCurrentIndex((prev) => prev + 1)
        } else {
            submitAssessment()
        }
    }

    const submitAssessment = () => {
        if (timerRef.current) clearInterval(timerRef.current)

        let score = 0
        for (const question of module1Assessment) {
            const selected = answers[question.id]
            const correct = question.options.find((opt) => opt.isCorrect)?.id
            if (selected && selected === correct) score += 1
        }

        const passed = score >= MODULE_1_PASSING_SCORE
        const attempt: StoredAttempt = {
            studentName,
            studentEmail,
            score,
            passed,
            submittedAt: Date.now(),
        }
        saveStoredAttempt(attempt)
        setPriorAttempt(attempt)
        setResult({ score, passed })
        setStage('results')

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { })
        }

        if (passed) {
            onPassed()
        }
    }

    const buildMailtoLink = () => {
        if (!result) return '#'
        const subject = encodeURIComponent(
            `Module 1 Assessment Result — ${studentName} (${result.passed ? 'PASSED' : 'FAILED'})`
        )
        const body = encodeURIComponent(
            `Student Name: ${studentName}\n` +
            `Student Email: ${studentEmail}\n` +
            `Score: ${result.score} / ${module1Assessment.length}\n` +
            `Result: ${result.passed ? 'PASSED' : 'FAILED'}\n` +
            `Submitted: ${new Date().toLocaleString()}\n\n` +
            `This result was generated automatically by Obara Academy.`
        )
        return `mailto:${INSTRUCTOR_EMAIL}?subject=${subject}&body=${body}`
    }

    // ---- Intro screen ----
    if (stage === 'intro') {
        const onCooldown = cooldownRemaining > 0

        return (
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-900">Module 1 Final Assessment</h2>
                    <p className="text-slate-600">
                        You must pass this assessment before Module 2 (Adobe Photoshop) unlocks. It covers everything
                        from Lessons 1 through 7.
                    </p>
                </div>

                <ul className="space-y-2 pl-5 text-slate-600">
                    <li className="list-disc">{module1Assessment.length} questions, multiple choice</li>
                    <li className="list-disc">45-minute timer, auto-submits when time expires</li>
                    <li className="list-disc">Passing score: {MODULE_1_PASSING_SCORE} / {module1Assessment.length} (80%)</li>
                    <li className="list-disc">Stay on this tab throughout, switching away is tracked as a violation</li>
                    <li className="list-disc">No outside help, notes, or resources, complete this independently</li>
                </ul>

                {priorAttempt && (
                    <div
                        className={`rounded-2xl p-4 text-sm ${priorAttempt.passed ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'
                            }`}
                    >
                        Last attempt: {priorAttempt.score} / {module1Assessment.length} —{' '}
                        {priorAttempt.passed ? 'Passed' : 'Not yet passed'}
                        {onCooldown && (
                            <span className="block mt-1">
                                You can retry in {formatTime(cooldownRemaining)}.
                            </span>
                        )}
                    </div>
                )}

                {!priorAttempt?.passed && !onCooldown && (
                    <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div>
                            <label htmlFor="student-name" className="mb-1 block text-sm font-medium text-slate-900">
                                Full name
                            </label>
                            <input
                                id="student-name"
                                type="text"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="student-email" className="mb-1 block text-sm font-medium text-slate-900">
                                Email address
                            </label>
                            <input
                                id="student-email"
                                type="email"
                                value={studentEmail}
                                onChange={(e) => setStudentEmail(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <Button
                            onClick={handleStart}
                            disabled={!studentName.trim() || !studentEmail.trim()}
                            className="w-full"
                        >
                            Start Assessment
                        </Button>
                    </div>
                )}

                {priorAttempt?.passed && (
                    <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
                        You've already passed this assessment. Module 2 is unlocked.
                    </div>
                )}
            </div>
        )
    }

    // ---- In-progress screen ----
    if (stage === 'in-progress') {
        const question = module1Assessment[currentIndex]
        const selected = answers[question.id]
        const progress = Math.round(((currentIndex + 1) / module1Assessment.length) * 100)
        const timeCritical = secondsLeft <= 300

        return (
            <div
                className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
                onContextMenu={(e) => e.preventDefault()}
            >
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                        Question {currentIndex + 1} of {module1Assessment.length}
                    </span>
                    <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${timeCritical ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                            }`}
                    >
                        {formatTime(secondsLeft)}
                    </span>
                </div>

                <div className="h-1.5 w-full rounded-full bg-slate-200">
                    <div
                        className="h-1.5 rounded-full bg-sky-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {showViolationWarning && (
                    <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-900">
                        Warning {violationCount} of {MODULE_1_MAX_VIOLATIONS}: stay on this page during the assessment.
                        {violationCount === MODULE_1_MAX_VIOLATIONS - 1 &&
                            ' One more violation will auto-submit your test immediately.'}
                        <button
                            onClick={() => setShowViolationWarning(false)}
                            className="ml-3 font-semibold underline"
                        >
                            Dismiss
                        </button>
                    </div>
                )}

                <div>
                    <h3 className="mb-4 text-base font-semibold text-slate-900">{question.question}</h3>
                    <div className="space-y-2">
                        {question.options.map((option) => {
                            const isSelected = selected === option.id
                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(option.id)}
                                    className={`w-full rounded-xl border-2 p-3 text-left text-sm font-medium transition-all duration-200 ${isSelected
                                            ? 'border-sky-500 bg-sky-50 text-sky-900'
                                            : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300'
                                        }`}
                                >
                                    {option.text}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <Button onClick={handleNext} disabled={!selected} className="w-full">
                    {currentIndex === module1Assessment.length - 1 ? 'Submit Assessment' : 'Next Question'}
                </Button>
            </div>
        )
    }

    // ---- Results screen ----
    if (stage === 'results' && result) {
        return (
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft text-center">
                <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${result.passed ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                        }`}
                >
                    {result.passed ? '✓' : '✗'}
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                        {result.passed ? 'Assessment Passed' : 'Assessment Not Passed'}
                    </h2>
                    <p className="mt-2 text-slate-600">
                        {studentName}, you scored {result.score} out of {module1Assessment.length} (
                        {Math.round((result.score / module1Assessment.length) * 100)}%).
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        Passing score: {MODULE_1_PASSING_SCORE} / {module1Assessment.length}
                    </p>
                </div>

                {result.passed ? (
                    <p className="text-sm text-emerald-700">Module 2 (Adobe Photoshop) is now unlocked.</p>
                ) : (
                    <p className="text-sm text-amber-700">
                        You can retry this assessment in {formatTime(MODULE_1_RETRY_COOLDOWN_SECONDS)}.
                    </p>
                )}

                <a href={buildMailtoLink()}>
                    <Button variant="secondary" className="w-full">
                        Email My Results to Instructor
                    </Button>
                </a>
            </div>
        )
    }

    return null
}