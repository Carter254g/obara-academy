import { type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

  const variantStyles =
    variant === 'secondary'
      ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      : variant === 'ghost'
      ? 'bg-transparent text-slate-700 hover:bg-slate-100'
      : 'bg-sky-600 text-white hover:bg-sky-700'

  return <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
}
