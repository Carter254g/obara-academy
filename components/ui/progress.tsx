import { type HTMLAttributes } from 'react'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
}

export function Progress({ value, className = '', ...props }: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value))

  return (
    <div
      className={`overflow-hidden rounded-full bg-slate-200 ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
      {...props}
    >
      <div
        className="h-2 bg-gradient-to-r from-sky-500 to-sky-600 transition-all duration-500 ease-out"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  )
}
