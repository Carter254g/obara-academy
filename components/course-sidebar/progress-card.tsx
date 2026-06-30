import { Progress } from '../ui/progress'
import type { Course } from '../../types/course'

interface ProgressCardProps {
  course: Course
  completedLessons: number
  totalLessons: number
  progressValue: number
}

export function ProgressCard({ course, completedLessons, totalLessons, progressValue }: ProgressCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-xs uppercase tracking-[0.28em] text-sky-600">Course progress</p>
      <h2 className="mt-4 text-xl font-semibold text-slate-900">{course.title}</h2>
      <div className="mt-6 space-y-3">
        <Progress value={progressValue} className="h-3 rounded-full" />
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{completedLessons} of {totalLessons} lessons completed</span>
          <span>{progressValue}%</span>
        </div>
      </div>
    </div>
  )
}
