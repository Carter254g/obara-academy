export type LessonState = 'completed' | 'locked' | 'active' | 'upcoming'
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Lesson {
  id: string
  title: string
  duration: string
  difficulty: Difficulty
  state: LessonState
}

export interface CourseModule {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Course {
  title: string
  modules: CourseModule[]
}
