import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'

interface SidebarItem {
  id: string
  title: string
}

interface LessonSidebarProps {
  sections: SidebarItem[]
  activeSection: string
  progress: number
  onNavigate: (id: string) => void
}

export function LessonSidebar({ sections, activeSection, progress, onNavigate }: LessonSidebarProps) {
  return (
    <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-full shrink-0 overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft xl:block">
      <div className="space-y-4">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Lesson map</p>
              <h2 className="text-lg font-semibold text-slate-900">Section progress</h2>
            </div>
            <Badge>XP +25</Badge>
          </div>
          <Progress value={progress} className="h-3 rounded-full" />
          <p className="mt-3 text-sm text-slate-500">{progress}% complete</p>
        </div>

        <div className="space-y-2">
          {sections.map((section) => {
            const isActive = section.id === activeSection
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onNavigate(section.id)}
                className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? 'border-sky-500 bg-sky-50 text-slate-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                  {sections.indexOf(section) + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{section.title}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
