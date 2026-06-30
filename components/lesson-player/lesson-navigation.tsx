import { Button } from '../ui/button'
import type { Lesson } from '../../types/course'

interface LessonNavigationProps {
  previousLesson?: Lesson
  nextLesson?: Lesson
  isComplete: boolean
  onPrevious: () => void
  onNext: () => void
  onToggleComplete: () => void
}

export function LessonNavigation({ previousLesson, nextLesson, isComplete, onPrevious, onNext, onToggleComplete }: LessonNavigationProps) {
  const canAdvance = Boolean(nextLesson && isComplete)

  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={onPrevious} disabled={!previousLesson}>
          Previous lesson
        </Button>
        <Button onClick={onNext} disabled={!canAdvance}>
          Next lesson
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-slate-600">Current status: {isComplete ? 'Completed' : 'In progress'}</p>
        <Button onClick={onToggleComplete}>
          {isComplete ? 'Mark as incomplete' : 'Mark as complete'}
        </Button>
      </div>
    </div>
  )
}
