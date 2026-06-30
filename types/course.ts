export type LessonState = 'completed' | 'locked' | 'active' | 'upcoming'
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced'
export type CalloutType = 'tip' | 'warning' | 'best-practice'

export interface Lesson {
  id: string
  title: string
  description: string
  lessonNumber?: number
  duration: string
  difficulty: Difficulty
  xpReward: number
  completed?: boolean
  locked?: boolean
  state?: LessonState
}

export interface CalloutBox {
  type: CalloutType
  title: string
  content: string
}

export interface LessonImage {
  caption: string
  width?: string
  height?: string
}

export interface Subsection {
  title: string
  content: string
}

export interface LessonSection {
  id: string
  title: string
  duration: string
  content: {
    heading: string
    body: string
  }
  callouts?: CalloutBox[]
  image?: LessonImage
  subsections?: Subsection[]
}

export interface PracticeStep {
  title: string
  instruction: string
  tips?: string[]
}

export interface PracticeActivity {
  title: string
  description: string
  estimatedTime: string
  steps: PracticeStep[]
}

export interface KnowledgeCheckOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface KnowledgeCheckQuestion {
  id: string
  question: string
  options: KnowledgeCheckOption[]
  explanation?: string
}

export interface Assignment {
  title: string
  description: string
  task: string
  rubric: string[]
}

export interface Summary {
  title: string
  keyPoints: string[]
  nextSteps: string[]
}

export interface Resource {
  title: string
  url: string
  type?: 'documentation' | 'download' | 'video'
}

export interface ChecklistItem {
  id: string
  label: string
  description?: string
}

export interface Checklist {
  title: string
  description: string
  items: ChecklistItem[]
}

export interface RequiredSoftware {
  id: string
  name: string
  description: string
  status: 'required' | 'recommended'
}

export interface Requirements {
  software: RequiredSoftware[]
}

export interface HeroSection {
  headline: string
  subheadline: string
  keyBenefits: string[]
}

export interface NextLesson {
  title: string
  preview: string
  description: string
  topics: string[]
}

export interface LessonContentSection {
  title: string
  description: string
  body: string
}

export interface LessonData extends Lesson {
  moduleTitle: string
  progress: number
  hero?: HeroSection
  learningObjectives: string[]
  requirements?: Requirements
  beforeYouBegin?: Checklist
  sections?: LessonSection[]
  content?: Record<string, LessonContentSection>
  practicalExercise: PracticeActivity
  knowledgeCheck?: {
    title: string
    questions: KnowledgeCheckQuestion[]
  }
  assignment: Assignment
  summary: Summary
  resources: Resource[]
  nextLesson?: NextLesson
}

export interface Module {
  id: string
  title: string
  description: string
  order: number
  lessons: Lesson[]
}

export type CourseModule = Module

export interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: string
  estimatedHours: number
  level: CourseLevel
  category: string
  modules: Module[]
}
