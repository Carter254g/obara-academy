import { CheckCircle2, Lock, Clock, Shield } from 'lucide-react'
import { Badge } from '../ui/badge'
import type { Lesson } from '../../types/course'

interface CourseSidebarItemProps {
  lesson: Lesson
  isActive: boolean
  onSelect: (lesson: Lesson) => void
}

const stateStyles: Record<Lesson['state'], string> = {
  completed: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  active: 'border-sky-200 bg-sky-50 text-slate-900',
  upcoming: 'border-slate-200 bg-white text-slate-700',
  locked: 'border-slate-200 bg-slate-50 text-slate-400',
}

export function CourseSidebarItem({ lesson, isActive, onSelect }: CourseSidebarItemProps) {
  const isLocked = lesson.state === 'locked'
  const Icon = lesson.state === 'completed' ? CheckCircle2 : lesson.state === 'locked' ? Lock : Clock

  return (
    <button
      type="button"
      data-lesson-id={lesson.id}
      onClick={() => !isLocked && onSelect(lesson)}
      className={`group flex w-full items-center justify-between gap-4 rounded-3xl border px-4 py-3 text-left transition ${stateStyles[lesson.state]} ${
        isActive ? 'ring-2 ring-sky-500' : 'hover:border-slate-300 hover:bg-slate-100'
      } ${isLocked ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0" />
          <span className="text-sm font-semibold">{lesson.title}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {lesson.duration}
          </span>
          <Badge variant="secondary">{lesson.difficulty}</Badge>
        </div>
      </div>
      {lesson.state === 'completed' ? (
        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
      ) : lesson.state === 'locked' ? (
        <Lock className="h-5 w-5 text-slate-400" />
      ) : null}
    </button>
  )
}
