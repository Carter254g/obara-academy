'use client'

import { useMemo, useState } from 'react'
import { CourseSidebar } from '../../components/course-sidebar/course-sidebar'
import { courseData } from '../../data/course-data'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import type { Lesson } from '../../types/course'

export default function CourseNavigationPage() {
  const [activeLessonId, setActiveLessonId] = useState('lesson-9')

  const activeLesson = useMemo(() => {
    return (
      courseData.modules
        .flatMap((module) => module.lessons)
        .find((lesson) => lesson.id === activeLessonId) ?? courseData.modules[0].lessons[0]
    )
  }, [activeLessonId])

  const completedLessons = useMemo(
    () => courseData.modules.flatMap((module) => module.lessons).filter((lesson) => lesson.state === 'completed').length,
    []
  )

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 xl:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[380px_1fr]">
        <CourseSidebar course={courseData} activeLessonId={activeLessonId} onLessonSelect={(lesson: Lesson) => setActiveLessonId(lesson.id)} />

        <section className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-600">Current lesson</p>
                <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">{activeLesson.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>Lesson duration: {activeLesson.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <Badge variant="secondary">{activeLesson.difficulty}</Badge>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{activeLesson.state === 'completed' ? 'Completed' : activeLesson.state === 'active' ? 'Active' : activeLesson.state === 'locked' ? 'Locked' : 'Upcoming'}</Badge>
                <Button>{activeLesson.state === 'locked' ? 'Unlock next lesson' : 'Open lesson'}</Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900">Lesson overview</h2>
                <p className="text-slate-600">
                  This sidebar navigation is built for premium learning experiences. It keeps learners oriented, highlights the active lesson, and surfaces locked content clearly.
                </p>
                <ul className="space-y-3 pl-5 text-slate-600">
                  <li className="list-disc">Modules expand and collapse to keep navigation focused.</li>
                  <li className="list-disc">Active lessons are always visible and highlighted.</li>
                  <li className="list-disc">Completed lessons show a green check icon.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Course summary</p>
              <div className="space-y-3">
                <p className="text-sm text-slate-600">{courseData.title}</p>
                <p className="text-2xl font-semibold text-slate-950">{completedLessons} / 15 Lessons Completed</p>
                <Button variant="secondary" className="w-full">
                  Resume current lesson
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
