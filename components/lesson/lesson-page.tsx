'use client'

import { useEffect, useMemo, useState } from 'react'
import { PremiumLessonView } from './premium-lesson-view'
import { Toast } from '../ui/toast'
import { lesson01 } from '../../lib/lesson-01'
import { courseData } from '../../data/course-data'
import {
  cloneCourse,
  countCompletedLessons,
  findLessonById,
  getFlatLessons,
  getInitialActiveLessonId,
  loadSavedCourseState,
  saveCourseState,
  toggleLessonComplete,
} from '../../lib/course-utils'
import type { Course, Lesson } from '../../types/course'

export default function LessonPage() {
  const [savedProgress] = useState(() => loadSavedCourseState())
  const [course, setCourse] = useState<Course>(() => cloneCourse(savedProgress?.course ?? courseData))
  const [activeLessonId, setActiveLessonId] = useState<string>(() => savedProgress?.activeLessonId ?? getInitialActiveLessonId(courseData))
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const activeLesson = useMemo(
    () => findLessonById(course, activeLessonId) ?? course.modules[0].lessons[0],
    [course, activeLessonId]
  )

  const flatLessons = useMemo(() => getFlatLessons(course), [course])
  const completedLessons = useMemo(() => countCompletedLessons(course), [course])
  const totalLessons = flatLessons.length
  const progressValue = Math.round((completedLessons / totalLessons) * 100)

  useEffect(() => {
    saveCourseState(course, activeLessonId)
  }, [course, activeLessonId])

  const handleToggleComplete = () => {
    setCourse((currentCourse) => toggleLessonComplete(currentCourse, activeLessonId))
    setToastMessage('Lesson completed! Course progress updated.')
    window.setTimeout(() => setToastMessage(null), 2800)
  }

  const handleLessonSelect = (lesson: Lesson) => {
    setActiveLessonId(lesson.id)
  }

  return (
    <div>
      <Toast message={toastMessage ?? ''} open={Boolean(toastMessage)} onClose={() => setToastMessage(null)} />
      <PremiumLessonView
        lesson={lesson01}
        completed={Boolean(activeLesson?.completed)}
        onToggleComplete={handleToggleComplete}
        progressValue={progressValue}
        completedLessons={completedLessons}
        totalLessons={totalLessons}
      />
    </div>
  )
}
