import type { ReactNode } from 'react'
import type { Lesson } from '../../types/course'

interface LessonContentProps {
  lesson: Lesson
}

export function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <Section title="Learning Objectives">
        <ul className="space-y-3 pl-5 text-slate-600">
          <li className="list-disc">Understand the purpose and structure of the lesson within the module.</li>
          <li className="list-disc">Master the core technique introduced in this lesson.</li>
          <li className="list-disc">Apply practical steps in your own editing workflow.</li>
        </ul>
      </Section>

      <Section title="Lesson Content">
        <p className="text-slate-600">
          This lesson walks through the main editing approach with concise examples and recommendations. Follow the sequence, pause on the examples, and review the highlighted best practices.
        </p>
      </Section>

      <Section title="Practical Exercise">
        <p className="text-slate-600">
          Try the exercise below using your own sample photo: apply the same settings, compare the before/after states, and note what changes improve clarity and tone.
        </p>
        <ul className="space-y-3 pl-5 text-slate-600">
          <li className="list-disc">Open a raw photo and apply the suggested edits.</li>
          <li className="list-disc">Review the result against the original image.</li>
          <li className="list-disc">Write one short note on the visual improvement.</li>
        </ul>
      </Section>

      <Section title="Pro Tips">
        <ul className="space-y-3 pl-5 text-slate-600">
          <li className="list-disc">Keep your edits subtle on the first pass, then refine contrast.</li>
          <li className="list-disc">Use the history brush to compare before and after quickly.</li>
          <li className="list-disc">Save a reusable preset once you find a look that works.</li>
        </ul>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
