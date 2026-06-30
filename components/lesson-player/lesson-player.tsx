'use client'

import type { Course, Lesson } from '../../types/course'
import { LessonHeader } from './lesson-header'
import { LessonContent } from './lesson-content'
import { LessonNavigation } from './lesson-navigation'
import { LessonSummary } from './lesson-summary'

interface LessonPlayerProps {
  course: Course
  activeLesson: Lesson
  currentModuleTitle: string
  completedLessons: number
  totalLessons: number
  previousLesson?: Lesson
  nextLesson?: Lesson
  onPrevious: () => void
  onNext: () => void
  onToggleComplete: () => void
}

export function LessonPlayer({
  activeLesson,
  currentModuleTitle,
  completedLessons,
  totalLessons,
  previousLesson,
  nextLesson,
  onPrevious,
  onNext,
  onToggleComplete,
}: LessonPlayerProps) {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <LessonHeader
          moduleTitle={currentModuleTitle}
          lesson={activeLesson}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <LessonContent lesson={activeLesson} />
          <LessonSummary lesson={activeLesson} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Lesson details</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{activeLesson.duration}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Difficulty</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{activeLesson.difficulty}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">XP reward</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{activeLesson.xpReward} XP</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Course progress</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{completedLessons} / {totalLessons} lessons completed</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <LessonNavigation
        previousLesson={previousLesson}
        nextLesson={nextLesson}
        isComplete={Boolean(activeLesson.completed)}
        onPrevious={onPrevious}
        onNext={onNext}
        onToggleComplete={onToggleComplete}
      />
    </section>
  )
}
