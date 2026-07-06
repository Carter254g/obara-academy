'use client'

import { useEffect, useMemo, useState } from 'react'
import { CourseSidebar } from '../../components/course-sidebar/course-sidebar'
import { LessonPlayer } from '../../components/lesson-player/lesson-player'
import { courseData } from '../../data/course-data'
import { Toast } from '../../components/ui/toast'
import {
  cloneCourse,
  countCompletedLessons,
  findLessonById,
  findLessonModule,
  getAdjacentLesson,
  getFlatLessons,
  getInitialActiveLessonId,
  loadSavedCourseState,
  saveCourseState,
  toggleLessonComplete,
} from '../../lib/course-utils'
import type { Course, Lesson } from '../../types/course'
import { ModuleAssessment } from '../../components/assessment/module-assessment'

const MODULE_1_ASSESSMENT_KEY = 'obara-module-1-assessment'

function isModule1AssessmentPassed(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem(MODULE_1_ASSESSMENT_KEY)
    if (!raw) return false
    return JSON.parse(raw).passed === true
  } catch {
    return false
  }
}

export default function CourseNavigationPage() {
    const [course, setCourse] = useState<Course>(() => cloneCourse(courseData))
    const [activeLessonId, setActiveLessonId] = useState<string>(() => getInitialActiveLessonId(courseData))
    const [toastMessage, setToastMessage] = useState<string | null>(null)
    const [hasHydrated, setHasHydrated] = useState(false)
  const [assessmentPassed, setAssessmentPassed] = useState(false)

  useEffect(() => {
    setAssessmentPassed(isModule1AssessmentPassed())
  }, [])
  const activeLesson = useMemo(
    () => findLessonById(course, activeLessonId) ?? course.modules[0].lessons[0],
    [course, activeLessonId]
  )

  const activeModule = useMemo(
    () => findLessonModule(course, activeLessonId),
    [course, activeLessonId]
  )

  const flatLessons = useMemo(() => getFlatLessons(course), [course])
  const completedLessons = useMemo(() => countCompletedLessons(course), [course])
  const totalLessons = flatLessons.length

  const previousLesson = useMemo(() => getAdjacentLesson(course, activeLessonId, 'previous'), [course, activeLessonId])
  const nextLesson = useMemo(() => getAdjacentLesson(course, activeLessonId, 'next'), [course, activeLessonId])

    useEffect(() => {
        const savedProgress = loadSavedCourseState()
        if (savedProgress) {
            setCourse(savedProgress.course)
            setActiveLessonId(savedProgress.activeLessonId)
        }
        setHasHydrated(true)
    }, [])

    useEffect(() => {
        if (!hasHydrated) return
        saveCourseState(course, activeLessonId)
    }, [course, activeLessonId, hasHydrated])

  const showSuccessToast = (message: string) => {
    setToastMessage(message)
    window.setTimeout(() => setToastMessage(null), 2800)
  }

  const handleLessonSelect = (lesson: Lesson) => setActiveLessonId(lesson.id)

  const handleToggleComplete = () => {
    setCourse((currentCourse) => {
      const currentLesson = findLessonById(currentCourse, activeLessonId)
      const nextState = toggleLessonComplete(currentCourse, activeLessonId)

      if (currentLesson && !currentLesson.completed) {
        showSuccessToast('Lesson completed! Next lesson unlocked.')
      }

      return nextState
    })
  }

  const handlePrevious = () => previousLesson && setActiveLessonId(previousLesson.id)
  const handleNext = () => {
    if (activeLesson.completed && nextLesson) {
      setActiveLessonId(nextLesson.id)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 xl:px-12">
      <Toast message={toastMessage ?? ''} open={Boolean(toastMessage)} onClose={() => setToastMessage(null)} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[380px_1fr]">
        <CourseSidebar course={course} activeLessonId={activeLessonId} onLessonSelect={handleLessonSelect} />

        {activeLesson.id === 'lesson-8' && !assessmentPassed ? (
          <ModuleAssessment onPassed={() => setAssessmentPassed(true)} />
        ) : (
          <LessonPlayer
            course={course}
            activeLesson={activeLesson}
            currentModuleTitle={activeModule?.title ?? 'Course'}
            completedLessons={completedLessons}
            totalLessons={totalLessons}
            previousLesson={previousLesson}
            nextLesson={nextLesson}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onToggleComplete={handleToggleComplete}
          />
        )}
      </div>
    </main>
  )
}
