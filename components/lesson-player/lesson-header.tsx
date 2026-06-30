import { Badge } from '../ui/badge'
import type { Lesson } from '../../types/course'

interface LessonHeaderProps {
  moduleTitle: string
  lesson: Lesson
}

export function LessonHeader({ moduleTitle, lesson }: LessonHeaderProps) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
          {moduleTitle}
        </span>
        <Badge variant="secondary">Lesson {lesson.lessonNumber}</Badge>
        <Badge variant="accent">{lesson.difficulty}</Badge>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="text-sm leading-6 text-slate-600">{lesson.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <span>Duration: {lesson.duration}</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span>{lesson.xpReward} XP reward</span>
      </div>
    </div>
  )
}
