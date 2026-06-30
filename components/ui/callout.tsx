import { AlertCircle, Lightbulb, CheckCircle } from 'lucide-react'
import type { ReactNode } from 'react'

export type CalloutType = 'tip' | 'warning' | 'best-practice'

interface CalloutProps {
  type: CalloutType
  title: string
  children: ReactNode
}

export function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    tip: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      titleColor: 'text-blue-900',
      icon: Lightbulb,
      iconColor: 'text-blue-600',
    },
    warning: {
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      titleColor: 'text-amber-900',
      icon: AlertCircle,
      iconColor: 'text-amber-600',
    },
    'best-practice': {
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      titleColor: 'text-emerald-900',
      icon: CheckCircle,
      iconColor: 'text-emerald-600',
    },
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={`rounded-lg border-l-4 ${style.borderColor} ${style.bgColor} p-4`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 ${style.iconColor} mt-0.5`} />
        <div className="flex-1">
          <h3 className={`font-semibold ${style.titleColor}`}>{title}</h3>
          <div className={`mt-1 text-sm ${style.titleColor} opacity-90`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
