import type { ReactNode } from 'react'
import type { Lesson } from '../../types/course'
import { lessonRegistry } from '../../lib/lesson-data'
import { Checklist } from '../ui/checklist'
import { Callout } from '../ui/callout'
import { ImagePlaceholder } from '../ui/image-placeholder'
import { PracticeActivity } from '../ui/practice-activity'
import { KnowledgeCheck } from '../ui/knowledge-check'

interface LessonContentProps {
    lesson: Lesson
}

export function LessonContent({ lesson }: LessonContentProps) {
    const authoredLesson = lessonRegistry[lesson.id]
    const fullLesson = authoredLesson ? { ...authoredLesson, ...lesson } : null
    if (!fullLesson) {
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

    return (
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <Section title="Learning Objectives">
                <ul className="space-y-3 pl-5 text-slate-600">
                    {fullLesson.learningObjectives.map((objective, idx) => (
                        <li key={idx} className="list-disc">{objective}</li>
                    ))}
                </ul>
            </Section>

            {fullLesson.beforeYouBegin && (
                <Checklist title={fullLesson.beforeYouBegin.title} items={fullLesson.beforeYouBegin.items} />
            )}

            {fullLesson.sections?.map((section) => (
                <Section key={section.id} title={section.title}>
                    <h4 className="text-base font-semibold text-slate-900">{section.content.heading}</h4>
                    <p className="text-slate-600">{section.content.body}</p>

                    {section.callouts?.map((callout, idx) => (
                        <Callout key={idx} type={callout.type} title={callout.title}>
                            {callout.content}
                        </Callout>
                    ))}

                    {section.image && (
                        <ImagePlaceholder caption={section.image.caption} width={section.image.width} height={section.image.height} />
                    )}

                    {section.subsections?.map((subsection, idx) => (
                        <div key={idx} className="space-y-2">
                            <h5 className="font-semibold text-slate-900">{subsection.title}</h5>
                            <div
                                className="prose prose-sm max-w-none text-slate-600"
                                dangerouslySetInnerHTML={{ __html: subsection.content }}
                            />
                        </div>
                    ))}
                </Section>
            ))}

            <PracticeActivity
                title={fullLesson.practicalExercise.title}
                description={fullLesson.practicalExercise.description}
                steps={fullLesson.practicalExercise.steps}
                estimatedTime={fullLesson.practicalExercise.estimatedTime}
            />

            {fullLesson.knowledgeCheck && (
                <KnowledgeCheck questions={fullLesson.knowledgeCheck.questions} />
            )}
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