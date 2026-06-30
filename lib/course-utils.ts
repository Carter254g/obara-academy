import type { Course, Lesson, Module } from '../types/course'

export const COURSE_PROGRESS_STORAGE_KEY = 'obara-academy-course-progress-v1'

export interface CourseProgressSnapshot {
  course: Course
  activeLessonId: string
}

export function cloneCourse(course: Course): Course {
  return {
    ...course,
    modules: course.modules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) => ({ ...lesson })),
    })),
  }
}

export function getFlatLessons(course: Course): Lesson[] {
  return course.modules.flatMap((module) => module.lessons)
}

export function loadSavedCourseState(): CourseProgressSnapshot | null {
  if (typeof window === 'undefined') return null

  const stored = window.localStorage.getItem(COURSE_PROGRESS_STORAGE_KEY)
  if (!stored) return null

  try {
    return JSON.parse(stored) as CourseProgressSnapshot
  } catch {
    return null
  }
}

export function saveCourseState(course: Course, activeLessonId: string): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify({ course, activeLessonId })
    )
  } catch {
    // Ignore storage errors in private mode
  }
}

export function findLessonById(course: Course, lessonId: string): Lesson | undefined {
  return getFlatLessons(course).find((lesson) => lesson.id === lessonId)
}

export function findLessonModule(course: Course, lessonId: string): Module | undefined {
  return course.modules.find((module) => module.lessons.some((lesson) => lesson.id === lessonId))
}

export function getAdjacentLesson(course: Course, lessonId: string, direction: 'previous' | 'next'): Lesson | undefined {
  const lessons = getFlatLessons(course)
  const index = lessons.findIndex((lesson) => lesson.id === lessonId)
  if (index === -1) return undefined
  return direction === 'previous' ? lessons[index - 1] : lessons[index + 1]
}

export function getInitialActiveLessonId(course: Course): string {
  const activeLesson = getFlatLessons(course).find((lesson) => lesson.state === 'active' && !lesson.locked)
  if (activeLesson) return activeLesson.id

  const firstAvailable = getFlatLessons(course).find((lesson) => !lesson.locked)
  return firstAvailable?.id ?? course.modules[0].lessons[0].id
}

export function countCompletedLessons(course: Course): number {
  return getFlatLessons(course).filter((lesson) => lesson.completed).length
}

export function toggleLessonComplete(course: Course, lessonId: string): Course {
  const lessons = getFlatLessons(course)
  const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId)
  if (currentIndex === -1) {
    return course
  }

  const currentLesson = lessons[currentIndex]
  const isNowCompleted = !currentLesson.completed
  const nextLesson = lessons[currentIndex + 1]

  return {
    ...course,
    modules: course.modules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) => {
        if (lesson.id === lessonId) {
          return {
            ...lesson,
            completed: isNowCompleted,
            locked: false,
            state: isNowCompleted ? 'completed' : 'active',
          }
        }

        if (isNowCompleted && nextLesson?.id === lesson.id && lesson.locked) {
          return {
            ...lesson,
            locked: false,
            state: lesson.state === 'locked' ? 'upcoming' : lesson.state,
          }
        }

        return lesson
      }),
    })),
  }
}
