import type { LessonData } from '../types/course'
import { lesson01 } from './lesson-01'
import { lesson02 } from './lesson-02'
import { lesson03 } from './lesson-03'
import { lesson04 } from './lesson-04'
import { lesson05 } from './lesson-05'
import { lesson06 } from './lesson-06'
import { lesson07 } from './lesson-07'
import { lesson08 } from './lesson-08'
import { lesson09 } from './lesson-09'
import { lesson10 } from './lesson-10'
import { lesson11 } from './lesson-11'
import { lesson12 } from './lesson-12'
import { lesson13 } from './lesson-13'
import { lesson14 } from './lesson-14'
import { lesson15 } from './lesson-15'
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

// Registry of authored lesson content, keyed by lesson id.
// Add additional entries here as new lessons are authored (e.g. lesson-5, lesson-6, ...).
export const lessonRegistry: Record<string, LessonData> = {
    [lesson01.id]: lesson01,
    [lesson02.id]: lesson02,
    [lesson03.id]: lesson03,
    [lesson04.id]: lesson04,
    [lesson05.id]: lesson05,
    [lesson06.id]: lesson06,
    [lesson07.id]: lesson07,
    [lesson08.id]: lesson08,
    [lesson09.id]: lesson09,
    [lesson10.id]: lesson10,
    [lesson11.id]: lesson11,
    [lesson12.id]: lesson12,
    [lesson13.id]: lesson13,
    [lesson14.id]: lesson14,
    [lesson15.id]: lesson15,





}