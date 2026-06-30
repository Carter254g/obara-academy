export interface LessonSectionData {
  id: string
  title: string
  description: string
}

export const lessonMetadata = {
  moduleTitle: 'Module 1: Data Visualization Essentials',
  lessonTitle: 'Building Interactive Learning Dashboards',
  duration: '27 min',
  difficulty: 'Intermediate',
  xp: 25,
}

export const lessonSections: LessonSectionData[] = [
  { id: 'overview', title: 'Overview', description: 'A quick introduction to the lesson and its value.' },
  { id: 'objectives', title: 'Learning Objectives', description: 'What learners will be able to do by the end.' },
  { id: 'content', title: 'Lesson Content', description: 'Theory, best practices, and guided walkthroughs.' },
  { id: 'demonstration', title: 'Demonstration', description: 'A real-world example of the tool in action.' },
  { id: 'guided-practice', title: 'Guided Practice', description: 'Hands-on exercises with instructor support.' },
  { id: 'independent-practice', title: 'Independent Practice', description: 'Self-paced tasks to reinforce learning.' },
  { id: 'resources', title: 'Resources', description: 'Downloadable materials and reference links.' },
  { id: 'quiz', title: 'Quiz', description: 'Knowledge checks to validate your understanding.' },
  { id: 'assignment', title: 'Assignment', description: 'A capstone task to apply the lesson skills.' },
  { id: 'summary', title: 'Lesson Summary', description: 'A concise recap of the key takeaways.' },
  { id: 'next-lesson', title: 'Next Lesson', description: 'The recommended next module after completing this lesson.' },
]
