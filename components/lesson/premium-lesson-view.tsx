'use client'

import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Callout } from '../ui/callout'
import { Checklist } from '../ui/checklist'
import { ImagePlaceholder } from '../ui/image-placeholder'
import { KnowledgeCheck } from '../ui/knowledge-check'
import { PracticeActivity } from '../ui/practice-activity'
import { LessonHero } from '../ui/lesson-hero'
import { Progress } from '../ui/progress'
import { LessonSkeleton } from '../ui/lesson-skeleton'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { LessonData } from '../../types/course'

interface PremiumLessonViewProps {
  lesson: LessonData
  completed: boolean
  onToggleComplete: () => void
  progressValue?: number
  completedLessons?: number
  totalLessons?: number
}

export function PremiumLessonView({
  lesson,
  completed,
  onToggleComplete,
  progressValue = 0,
  completedLessons = 0,
  totalLessons = 0,
}: PremiumLessonViewProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['section-1']))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 400)
    return () => window.clearTimeout(timer)
  }, [lesson.id])

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <LessonSkeleton />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 transition-all duration-300 ease-out sm:px-6 lg:px-8">
      {/* Hero Section */}
      {lesson.hero && (
        <LessonHero
          moduleTitle={lesson.moduleTitle}
          lessonTitle={lesson.hero.headline}
          description={lesson.hero.subheadline}
          duration={lesson.duration}
          difficulty={lesson.difficulty}
          xpReward={lesson.xpReward}
          progress={progressValue}
          completed={completed}
        />
      )}

      <div className="mx-auto max-w-4xl space-y-8 py-10 sm:py-12">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Course progress</p>
              <p className="mt-2 text-sm text-slate-700">
                {completedLessons} of {totalLessons} lessons completed
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-slate-900">{progressValue}%</p>
              <p className="text-sm text-slate-500">overall progress</p>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progressValue} className="h-3 rounded-full" />
          </div>
        </div>
        {/* Key Benefits */}
        {lesson.hero?.keyBenefits && lesson.hero.keyBenefits.length > 0 && (
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">What You'll Learn</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {lesson.hero.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">✓</span>
                  <span className="text-sm text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learning Objectives */}
        <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Learning Objectives</h2>
          <ul className="space-y-2">
            {lesson.learningObjectives.map((objective, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-sky-100 text-center text-xs font-bold text-sky-600">
                  {idx + 1}
                </span>
                <span className="text-slate-700">{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Before You Begin Checklist */}
        {lesson.beforeYouBegin && (
          <Checklist
            title={lesson.beforeYouBegin.title}
            items={lesson.beforeYouBegin.items}
          />
        )}

        {/* Lesson Sections */}
        {lesson.sections && lesson.sections.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Lesson Content</h2>
            {lesson.sections.map((section, index) => {
              const isExpanded = expandedSections.has(section.id)

              return (
                <div key={section.id} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`lesson-section-${section.id}`}
                    className={`flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                      isExpanded ? 'bg-sky-50' : 'bg-white'
                    }`}
                  >
                    <div className="text-left">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-600">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-slate-900">{section.title}</h3>
                          <p className="text-xs text-slate-500">{section.duration}</p>
                        </div>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div id={`lesson-section-${section.id}`} className="space-y-6 border-t border-slate-200 px-6 py-6 transition-all duration-300">
                      {/* Section Heading and Body */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-slate-900">{section.content.heading}</h4>
                        <p className="text-slate-700">{section.content.body}</p>
                      </div>

                      {/* Callout Boxes */}
                      {section.callouts && section.callouts.length > 0 && (
                        <div className="space-y-4">
                          {section.callouts.map((callout, idx) => (
                            <Callout
                              key={idx}
                              type={callout.type}
                              title={callout.title}
                            >
                              {callout.content}
                            </Callout>
                          ))}
                        </div>
                      )}

                      {/* Image Placeholder */}
                      {section.image && (
                        <ImagePlaceholder
                          caption={section.image.caption}
                          width={section.image.width}
                          height={section.image.height}
                        />
                      )}

                      {/* Subsections */}
                      {section.subsections && section.subsections.length > 0 && (
                        <div className="space-y-4">
                          {section.subsections.map((subsection, idx) => (
                            <div key={idx} className="space-y-2">
                              <h5 className="font-semibold text-slate-900">{subsection.title}</h5>
                              <div
                                className="prose prose-sm max-w-none text-slate-700"
                                dangerouslySetInnerHTML={{ __html: subsection.content }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Practical Exercise */}
        <PracticeActivity
          title={lesson.practicalExercise.title}
          description={lesson.practicalExercise.description}
          steps={lesson.practicalExercise.steps}
          estimatedTime={lesson.practicalExercise.estimatedTime}
        />

        {/* Knowledge Check */}
        {lesson.knowledgeCheck && (
          <KnowledgeCheck questions={lesson.knowledgeCheck.questions} />
        )}

        {/* Assignment */}
        <section className="space-y-4 rounded-[1.5rem] border border-orange-200 bg-orange-50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{lesson.assignment.title}</h2>
          <p className="text-slate-700">{lesson.assignment.description}</p>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: lesson.assignment.task }}
          />
          {lesson.assignment.rubric.length > 0 && (
            <div className="rounded-lg border border-orange-300 bg-white p-4">
              <h3 className="mb-3 font-semibold text-slate-900">Grading Criteria</h3>
              <ul className="space-y-2">
                {lesson.assignment.rubric.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-600">★</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Button className="w-full">Submit Assignment</Button>
        </section>

        {/* Summary */}
        <section className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{lesson.summary.title}</h2>

          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Key Points</h3>
            <ul className="space-y-2">
              {lesson.summary.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-blue-600">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Next Steps to Deepen Your Skills</h3>
            <ul className="space-y-2">
              {lesson.summary.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-emerald-600">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Resources</h2>
          <div className="grid gap-3">
            {lesson.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-900">{resource.title}</p>
                  {resource.type && (
                    <Badge variant="secondary" className="mt-1">
                      {resource.type}
                    </Badge>
                  )}
                </div>
                <span className="text-slate-400">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Next Lesson Preview */}
        {lesson.nextLesson && (
          <section className="space-y-4 rounded-[1.5rem] border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide">{lesson.nextLesson.title}</p>
              <h2 className="text-2xl font-bold text-slate-900">{lesson.nextLesson.preview}</h2>
              <p className="mt-2 text-slate-700">{lesson.nextLesson.description}</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">Topics You'll Cover:</h3>
              <ul className="space-y-1">
                {lesson.nextLesson.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-slate-700">
                    • {topic}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full">Continue to Next Lesson</Button>
          </section>
        )}

        {/* Lesson Completion */}
        <div className="flex gap-3 rounded-[1.5rem] bg-slate-100 p-6 shadow-sm">
          <Button
            className="flex-1"
            variant={completed ? 'secondary' : 'primary'}
            onClick={onToggleComplete}
          >
            {completed ? '✓ Marked as Complete' : 'Mark Lesson as Complete'}
          </Button>
        </div>
      </div>
    </main>
  )
}
