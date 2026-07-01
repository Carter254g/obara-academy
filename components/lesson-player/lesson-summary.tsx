import type { Lesson } from '../../types/course'
import { lesson01 } from '../../lib/lesson-01'

interface LessonSummaryProps {
    lesson: Lesson
}

export function LessonSummary({ lesson }: LessonSummaryProps) {
    const fullLesson = lesson.id === lesson01.id ? { ...lesson01, ...lesson } : null
    if (fullLesson) {
        return (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900">{fullLesson.summary.title}</h2>
                    <div>
                        <h3 className="mb-2 font-semibold text-slate-900">Key Points</h3>
                        <ul className="space-y-3 pl-5 text-slate-600">
                            {fullLesson.summary.keyPoints.map((point, idx) => (
                                <li key={idx} className="list-disc">{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold text-slate-900">Next Steps</h3>
                        <ul className="space-y-3 pl-5 text-slate-600">
                            {fullLesson.summary.nextSteps.map((step, idx) => (
                                <li key={idx} className="list-disc">{step}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

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