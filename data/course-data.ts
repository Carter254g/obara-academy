import type { Course } from '../types/course'

export const courseData: Course = {
  title: 'Professional Photo Editing Mastery',
  modules: [
    {
      id: 'module-1',
      title: 'Module 1: Adobe Lightroom',
      lessons: [
        { id: 'lesson-1', title: 'Introduction to Lightroom', duration: '4 min', difficulty: 'Beginner', state: 'completed' },
        { id: 'lesson-2', title: 'Organizing Photos and Collections', duration: '6 min', difficulty: 'Beginner', state: 'completed' },
        { id: 'lesson-3', title: 'Basic Color and Exposure', duration: '5 min', difficulty: 'Beginner', state: 'completed' },
        { id: 'lesson-4', title: 'Tone Curve and Color Grading', duration: '7 min', difficulty: 'Intermediate', state: 'completed' },
        { id: 'lesson-5', title: 'Local Adjustments and Masks', duration: '8 min', difficulty: 'Intermediate', state: 'completed' },
        { id: 'lesson-6', title: 'Export Workflow for Web', duration: '4 min', difficulty: 'Beginner', state: 'completed' },
        { id: 'lesson-7', title: 'Review and Lightroom Best Practices', duration: '5 min', difficulty: 'Intermediate', state: 'completed' },
      ],
    },
    {
      id: 'module-2',
      title: 'Module 2: Adobe Photoshop',
      lessons: [
        { id: 'lesson-8', title: 'Photoshop Workspace Essentials', duration: '6 min', difficulty: 'Beginner', state: 'completed' },
        { id: 'lesson-9', title: 'Layer Management and Smart Objects', duration: '8 min', difficulty: 'Intermediate', state: 'active' },
        { id: 'lesson-10', title: 'Retouching Essentials', duration: '10 min', difficulty: 'Intermediate', state: 'upcoming' },
        { id: 'lesson-11', title: 'Advanced Masks and Selections', duration: '9 min', difficulty: 'Advanced', state: 'locked' },
        { id: 'lesson-12', title: 'Creative Compositing Techniques', duration: '11 min', difficulty: 'Advanced', state: 'locked' },
        { id: 'lesson-13', title: 'Color Correction and Matching', duration: '8 min', difficulty: 'Intermediate', state: 'locked' },
        { id: 'lesson-14', title: 'Preparing Files for Print and Web', duration: '7 min', difficulty: 'Beginner', state: 'locked' },
      ],
    },
    {
      id: 'module-3',
      title: 'Module 3: Final Capstone Project',
      lessons: [
        { id: 'lesson-15', title: 'Capstone: Publish a Full Photo Edit', duration: '18 min', difficulty: 'Advanced', state: 'locked' },
      ],
    },
  ],
}
