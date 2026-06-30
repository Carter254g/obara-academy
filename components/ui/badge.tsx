import { type HTMLAttributes } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'secondary'
}

export function Badge({ className = '', variant = 'accent', ...props }: BadgeProps) {
  const styles =
    variant === 'secondary'
      ? 'bg-slate-100 text-slate-900'
      : 'bg-sky-100 text-sky-700'

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles} ${className}`} {...props} />
}
