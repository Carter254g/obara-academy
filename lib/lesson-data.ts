import { lesson01 } from './lesson-01'
import type { LessonData } from '../types/course'

// Current active lesson
export const currentLesson: LessonData = lesson01 as LessonData

// Lesson sections for navigation (kept for backwards compatibility with old components)
export interface LessonSectionData {
  id: string
  title: string
  description: string
}

export const lessonSections: LessonSectionData[] = [
  { id: 'overview', title: 'Overview', description: 'A quick introduction to the lesson and its value.' },
  { id: 'interface', title: 'The Interface', description: 'Understanding the workspace.' },
  { id: 'importingPhotos', title: 'Importing & Organizing', description: 'Setting up your photo library.' },
  { id: 'basicAdjustments', title: 'Core Adjustments', description: 'Learn essential editing tools.' },
  { id: 'nonDestructiveEditing', title: 'Non-Destructive Editing', description: 'Protect your originals while editing.' },
  { id: 'exporting', title: 'Exporting Photos', description: 'Prepare photos for sharing.' },
]

// Legacy metadata for backwards compatibility
export const lessonMetadata = {
  moduleTitle: currentLesson.moduleTitle,
  lessonTitle: currentLesson.title,
  duration: currentLesson.duration,
  difficulty: currentLesson.difficulty,
  xp: currentLesson.xpReward,
}
