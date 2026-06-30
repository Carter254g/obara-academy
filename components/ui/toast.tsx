import { useEffect } from 'react'

interface ToastProps {
  message: string
  open: boolean
  onClose: () => void
}

export function Toast({ message, open, onClose }: ToastProps) {
  useEffect(() => {
    if (!open) return

    const timer = window.setTimeout(() => {
      onClose()
    }, 2800)

    return () => window.clearTimeout(timer)
  }, [open, onClose])

  if (!open || !message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[min(320px,calc(100%-2rem)))] rounded-3xl border border-slate-200 bg-slate-950/95 px-5 py-4 shadow-2xl backdrop-blur-sm text-white">
      <p className="text-sm font-semibold">{message}</p>
    </div>
  )
}
