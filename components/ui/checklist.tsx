import { Check } from 'lucide-react'
import { useState } from 'react'

interface ChecklistItem {
  id: string
  label: string
  description?: string
}

interface ChecklistProps {
  items: ChecklistItem[]
  title: string
}

export function Checklist({ items, title }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checked)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setChecked(newChecked)
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <label key={item.id} className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50 focus-within:bg-slate-50">
            <div className="relative mt-1 flex-shrink-0">
              <input
                type="checkbox"
                checked={checked.has(item.id)}
                onChange={() => toggleCheck(item.id)}
                className="h-5 w-5 cursor-pointer rounded border border-slate-300 bg-white text-sky-600 checked:border-sky-600 checked:bg-sky-600 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${checked.has(item.id) ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                {item.label}
              </p>
              {item.description && (
                <p className="mt-0.5 text-sm text-slate-600">
                  {item.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
