import { type HTMLAttributes } from 'react'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
}

export function Progress({ value, className = '', ...props }: ProgressProps) {
  return (
    <div className={`rounded-full bg-slate-200 overflow-hidden ${className}`} {...props}>
      <div
        className="h-2 bg-sky-600 transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
