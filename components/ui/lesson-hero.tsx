import { Badge } from './badge'
import { Zap, Clock, BarChart3 } from 'lucide-react'

interface LessonHeroProps {
  moduleTitle: string
  lessonTitle: string
  description: string
  duration: string
  difficulty: string
  xpReward: number
  progress: number
  completed: boolean
}

export function LessonHero({
  moduleTitle,
  lessonTitle,
  description,
  duration,
  difficulty,
  xpReward,
  progress,
  completed,
}: LessonHeroProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-soft sm:p-8">
      <div className="space-y-6">
        {/* Header with metadata */}
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">{moduleTitle}</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">{lessonTitle}</h1>
          <p className="max-w-3xl text-base text-slate-600 sm:text-lg">{description}</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 border border-slate-100">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-600">Duration</p>
                <p className="font-semibold text-slate-900">{duration}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-slate-100">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-600">Difficulty</p>
                <p className="font-semibold text-slate-900">{difficulty}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-slate-100">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-600">XP Reward</p>
                <p className="font-semibold text-slate-900">{xpReward}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-slate-100">
            <div>
              <p className="text-xs text-slate-600">Progress</p>
              <p className="font-semibold text-slate-900">{progress}%</p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge variant="accent">In Progress</Badge>
          {completed && <Badge variant="secondary">✓ Completed</Badge>}
        </div>

        {/* Progress bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Lesson Progress</span>
            <span className="text-xs font-semibold text-slate-900">{progress}%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-200">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
