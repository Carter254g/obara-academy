'use client'

import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import type { Course, Lesson } from '../../types/course'
import { CourseSidebarGroup } from './course-sidebar-group'
import { useAutoScrollToActiveLesson } from '../../hooks/use-auto-scroll'

interface CourseSidebarProps {
  course: Course
  activeLessonId: string
  onLessonSelect: (lesson: Lesson) => void
}

export function CourseSidebar({ course, activeLessonId, onLessonSelect }: CourseSidebarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [expandedModules, setExpandedModules] = useState<string[]>(course.modules.map((module) => module.id))
  const listRef = useAutoScrollToActiveLesson(activeLessonId)

  const completedLessons = useMemo(
    () => course.modules.flatMap((module) => module.lessons).filter((lesson) => lesson.state === 'completed').length,
    [course.modules]
  )

  const totalLessons = useMemo(
    () => course.modules.reduce((count, module) => count + module.lessons.length, 0),
    [course.modules]
  )

  const progressValue = useMemo(() => Math.round((completedLessons / totalLessons) * 100), [completedLessons, totalLessons])

  const handleToggleModule = (moduleId: string) => {
    setExpandedModules((current) =>
      current.includes(moduleId) ? current.filter((id) => id !== moduleId) : [...current, moduleId]
    )
  }

  return (
    <div className="relative">
      <div className="lg:hidden">
        <Button className="mb-4 w-full justify-between" onClick={() => setDrawerOpen(true)}>
          <span>Course navigation</span>
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-8 space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-600">Course progress</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{course.title}</h2>
            <div className="mt-6 space-y-3">
              <Progress value={progressValue} className="h-3 rounded-full" />
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{completedLessons} of {totalLessons} lessons completed</span>
                <span>{progressValue}%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4" ref={listRef}>
            {course.modules.map((module) => (
              <CourseSidebarGroup
                key={module.id}
                module={module}
                activeLessonId={activeLessonId}
                isExpanded={expandedModules.includes(module.id)}
                onToggle={handleToggleModule}
                onSelectLesson={(lesson) => {
                  onLessonSelect(lesson)
                  setDrawerOpen(false)
                }}
              />
            ))}
          </div>
        </div>
      </aside>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-[320px] overflow-y-auto border-r border-slate-200 bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-600">Course navigation</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{course.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-5">
              <Progress value={progressValue} className="h-3 rounded-full" />
              <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                <span>{completedLessons} of {totalLessons} lessons completed</span>
                <span>{progressValue}%</span>
              </div>
            </div>

            <div className="space-y-4">
              {course.modules.map((module) => (
                <CourseSidebarGroup
                  key={module.id}
                  module={module}
                  activeLessonId={activeLessonId}
                  isExpanded={expandedModules.includes(module.id)}
                  onToggle={handleToggleModule}
                  onSelectLesson={(lesson) => {
                    onLessonSelect(lesson)
                    setDrawerOpen(false)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
