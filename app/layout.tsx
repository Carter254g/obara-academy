import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Obara Academy — Learn modern skills with confidence',
  description: 'Obara Academy delivers premium courses, live coaching, and career-ready learning paths for ambitious learners.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}
