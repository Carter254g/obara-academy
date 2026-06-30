import { CheckCircle2, Clock, Lock, PlayCircle } from 'lucide-react'
import { Badge } from '../ui/badge'
import type { Lesson, LessonState } from '../../types/course'

interface LessonItemProps {
  lesson: Lesson
  isActive: boolean
  onSelect: (lesson: Lesson) => void
}

const stateStyles: Record<LessonState, string> = {
  completed: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  active: 'border-sky-200 bg-sky-50 text-slate-900',
  upcoming: 'border-slate-200 bg-white text-slate-700',
  locked: 'border-slate-200 bg-slate-50 text-slate-400',
}

export function LessonItem({ lesson, isActive, onSelect }: LessonItemProps) {
  const lessonState = lesson.state ?? (lesson.completed ? 'completed' : lesson.locked ? 'locked' : 'upcoming')
  const isLocked = lessonState === 'locked'
  const Icon = lessonState === 'completed' ? CheckCircle2 : lessonState === 'locked' ? Lock : PlayCircle

  return (
    <button
      type="button"
      onClick={() => !isLocked && onSelect(lesson)}
      className={`flex w-full items-start justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${stateStyles[lessonState]} ${
        isActive ? 'ring-2 ring-sky-500' : 'hover:border-slate-300 hover:bg-slate-100'
      } ${isLocked ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
    >
      <div className="min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          <Icon className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="text-sm font-semibold">{lesson.lessonNumber}. {lesson.title}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {lesson.duration}
          </span>
          <Badge variant="secondary">{lesson.difficulty}</Badge>
        </div>
      </div>
      {lessonState === 'completed' ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : null}
    </button>
  )
}
