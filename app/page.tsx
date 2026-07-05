import Link from 'next/link'
import { CheckCircle2, GraduationCap, Sparkles, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Structured learning paths',
    description: 'Follow a clear, sequential curriculum designed for rapid skill growth.',
    icon: GraduationCap,
  },
  {
    title: 'Learning with confidence',
    description: 'Track your progress across lessons, quizzes, and hands-on labs.',
    icon: ShieldCheck,
  },
  {
    title: 'Career-ready outcomes',
    description: 'Build practical projects and get ready for interviews and real roles.',
    icon: Sparkles,
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between py-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Obara Academy</p>
          </div>

          <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
            <Link href="/course-navigation" className="hover:text-slate-900">Courses</Link>
            <Link href="/signup" className="rounded-full border border-slate-200 bg-slate-100 px-5 py-2 transition hover:border-slate-300 hover:bg-slate-200">Sign up</Link>
          </nav>
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
              <Sparkles className="h-4 w-4" />
              New course bundles launching this quarter
            </div>

            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Learn faster, build better, and launch your career with Obara Academy.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Practical online lessons, progress tracking, and guided projects for ambitious learners who want clear outcomes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Start free trial
                </Link>
                <Link href="/course-navigation" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300">
                  Explore courses
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div className="space-y-5">
              <div className="flex items-center justify-between rounded-3xl bg-white px-5 py-4 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Next lesson unlocked</p>
                  <p className="text-xs text-slate-500">Track progress automatically</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-sky-600" />
              </div>

              <div className="space-y-3 rounded-3xl bg-slate-100 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Featured learning path</p>
                <h2 className="text-xl font-semibold text-slate-950">Full-stack launch program</h2>
                <p className="text-sm leading-6 text-slate-600">A complete trajectory from fundamentals to production-ready portfolio projects.</p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Beginner-friendly</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">20 lessons</p>
                  <p className="text-sm leading-6 text-slate-600">Hands-on modules, guided practice, and real code reviews.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Outcome-focused</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">Career-ready projects</p>
                  <p className="text-sm leading-6 text-slate-600">Build portfolio pieces while you learn, not after.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            )
          })}
        </section>

        <section className="mt-16 rounded-[32px] bg-slate-950 px-8 py-12 text-white sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Why learners choose Obara</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Launch faster with guided learning and real momentum.</h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">From first concept to confident delivery, our lessons are built to keep you moving and graduating with practical skills.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-2xl font-semibold">92%</p>
                  <p className="mt-2 text-sm text-slate-400">Course completion rate by active learners.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-2xl font-semibold">4.9/5</p>
                  <p className="mt-2 text-sm text-slate-400">Average learner satisfaction score.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-900/90 p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-white">What you'll gain</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                  Practical course roadmap with weekly milestones.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                  Portfolio projects ready for interviews and startups.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                  Ongoing progress tracking and learner support.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 py-8 text-sm text-slate-500">
          <p>© 2026 Obara Academy. Built for learners who want direction, structure, and real results.</p>
        </footer>
      </div>
    </main>
  )
}
