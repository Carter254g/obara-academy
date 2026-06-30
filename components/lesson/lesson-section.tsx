import { type ReactNode, useState } from 'react'
import { Badge } from '../ui/badge'

interface LessonSectionProps {
  id: string
  title: string
  description: string
  children: ReactNode
  defaultOpen?: boolean
}

export function LessonSection({
  id,
  title,
  description,
  children,
  defaultOpen = false,
}: LessonSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section id={id} className="space-y-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
        >
          {open ? 'Collapse' : 'Expand'}
        </button>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-opacity duration-200" aria-expanded={open}>
        <div className={open ? 'block' : 'hidden'}>{children}</div>
        {!open ? <Badge variant="secondary">Collapsed</Badge> : null}
      </div>
    </section>
  )
}
