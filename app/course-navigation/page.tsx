'use client'

import { useEffect, useMemo, useState } from 'react'
import { CourseSidebar } from '../../components/course-sidebar/course-sidebar'
import { LessonPlayer } from '../../components/lesson-player/lesson-player'
import { courseData } from '../../data/course-data'
import { Toast } from '../../components/ui/toast'
import {
  cloneCourse,
  countCompletedLessons,
  findLessonById,
  findLessonModule,
  getAdjacentLesson,
  getFlatLessons,
  getInitialActiveLessonId,
  loadSavedCourseState,
  saveCourseState,
  toggleLessonComplete,
} from '../../lib/course-utils'
import type { Course, Lesson } from '../../types/course'

export default function CourseNavigationPage() {
  const [savedProgress] = useState(() => loadSavedCourseState())
  const [course, setCourse] = useState<Course>(() => cloneCourse(savedProgress?.course ?? courseData))
  const [activeLessonId, setActiveLessonId] = useState<string>(() => savedProgress?.activeLessonId ?? getInitialActiveLessonId(courseData))
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const activeLesson = useMemo(
    () => findLessonById(course, activeLessonId) ?? course.modules[0].lessons[0],
    [course, activeLessonId]
  )

  const activeModule = useMemo(
    () => findLessonModule(course, activeLessonId),
    [course, activeLessonId]
  )

  const flatLessons = useMemo(() => getFlatLessons(course), [course])
  const completedLessons = useMemo(() => countCompletedLessons(course), [course])
  const totalLessons = flatLessons.length

  const previousLesson = useMemo(() => getAdjacentLesson(course, activeLessonId, 'previous'), [course, activeLessonId])
  const nextLesson = useMemo(() => getAdjacentLesson(course, activeLessonId, 'next'), [course, activeLessonId])

  useEffect(() => {
    saveCourseState(course, activeLessonId)
  }, [course, activeLessonId])

  const showSuccessToast = (message: string) => {
    setToastMessage(message)
    window.setTimeout(() => setToastMessage(null), 2800)
  }

  const handleLessonSelect = (lesson: Lesson) => setActiveLessonId(lesson.id)

  const handleToggleComplete = () => {
    setCourse((currentCourse) => {
      const currentLesson = findLessonById(currentCourse, activeLessonId)
      const nextState = toggleLessonComplete(currentCourse, activeLessonId)

      if (currentLesson && !currentLesson.completed) {
        showSuccessToast('Lesson completed! Next lesson unlocked.')
      }

      return nextState
    })
  }

  const handlePrevious = () => previousLesson && setActiveLessonId(previousLesson.id)
  const handleNext = () => {
    if (activeLesson.completed && nextLesson) {
      setActiveLessonId(nextLesson.id)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 xl:px-12">
      <Toast message={toastMessage ?? ''} open={Boolean(toastMessage)} onClose={() => setToastMessage(null)} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[380px_1fr]">
        <CourseSidebar course={course} activeLessonId={activeLessonId} onLessonSelect={handleLessonSelect} />

        <LessonPlayer
          course={course}
          activeLesson={activeLesson}
          currentModuleTitle={activeModule?.title ?? 'Course'}
          completedLessons={completedLessons}
          totalLessons={totalLessons}
          previousLesson={previousLesson}
          nextLesson={nextLesson}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </main>
  )
}
