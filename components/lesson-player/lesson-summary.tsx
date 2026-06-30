import type { Lesson } from '../../types/course'

interface LessonSummaryProps {
  lesson: Lesson
}

export function LessonSummary({ lesson }: LessonSummaryProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Summary</h2>
        <p className="text-slate-600">
          In this lesson, you learned the essential steps for {lesson.title.toLowerCase()}. Use the practical exercise to lock in the workflow and review your results.
        </p>
        <ul className="space-y-3 pl-5 text-slate-600">
          <li className="list-disc">Learn the workflow behind the lesson topic.</li>
          <li className="list-disc">Apply the technique in a practical setting.</li>
          <li className="list-disc">Review your outcome against the original image.</li>
        </ul>
      </div>
    </div>
  )
}
