'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, UserPlus } from 'lucide-react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !password) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[32px] bg-white p-8 shadow-soft sm:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Join Obara Academy</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Create your account and start learning today.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Access premium lessons, progress tracking, and project-based learning built for your next career move.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            Back to landing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="space-y-6 rounded-[28px] bg-slate-50 p-8">
            <div className="flex items-start gap-3 text-slate-900">
              <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">Secure onboarding</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Your learning profile, progress, and project history are protected with modern security practices.</p>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Why sign up</p>
                <p className="mt-3 text-base leading-7 text-slate-700">Save progress, join exclusive programs, and unlock special learning bundles.</p>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-slate-600">
                <li>✅ Personalized learning path</li>
                <li>✅ Exclusive access to upcoming content</li>
                <li>✅ Progress syncing across sessions</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <UserPlus className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Create your account</p>
                <p className="text-2xl font-semibold text-slate-950">Free trial included</p>
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-3xl bg-sky-50 p-6 text-slate-900 shadow-sm">
                <p className="text-lg font-semibold">You're all set!</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">We sent a confirmation link to your email. Start exploring courses and learning fast.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    placeholder="Alexandra Obara"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    placeholder="Create a secure password"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Create account
                </button>
                <p className="text-center text-sm leading-6 text-slate-500">
                  By signing up, you agree to our terms and privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
