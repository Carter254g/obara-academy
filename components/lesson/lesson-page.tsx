'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { LessonSection } from './lesson-section'
import { LessonSidebar } from './lesson-sidebar'
import { lessonMetadata, lessonSections } from '../../lib/lesson-data'

const sectionContent: Record<string, JSX.Element> = {
  overview: (
    <div className="space-y-4 text-slate-600">
      <p>
        This lesson introduces a premium learning module layout for Obara Academy. Learners will explore guided workflows, practice prompts, and production-ready lesson structure built for knowledge retention.
      </p>
      <p>
        The design balances clarity with interaction and keeps the learner focused on the key outcomes, progress, and next steps.
      </p>
    </div>
  ),
  objectives: (
    <ul className="space-y-3 pl-5 text-slate-600">
      <li className="list-disc">Identify the components of a modern lesson experience.</li>
      <li className="list-disc">Navigate and complete lesson modules with confidence.</li>
      <li className="list-disc">Apply guided and independent practice strategies.</li>
    </ul>
  ),
  content: (
    <div className="space-y-4 text-slate-600">
      <p>
        The lesson content covers essential theory, practical examples, and reference guidance so students can build skills progressively.
      </p>
      <p>
        Each module includes annotated walkthroughs, interactive patterns, and clear learning goals to support advanced learners.
      </p>
    </div>
  ),
  demonstration: (
    <div className="space-y-4 text-slate-600">
      <p>
        Watch a step-by-step demonstration of dashboard creation, with an emphasis on data interpretation, visual storytelling, and actionable insights.
      </p>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <p className="font-semibold text-slate-900">Demo highlight</p>
        <p className="text-sm text-slate-500">Interactive charts, filters, and learner feedback loops are shown in a modern course setup.</p>
      </div>
    </div>
  ),
  'guided-practice': (
    <div className="space-y-4 text-slate-600">
      <p>
        Complete a guided exercise with instructor-style prompts. Each step is supported with tips and checkpoints designed for skill reinforcement.
      </p>
      <ul className="space-y-3 pl-5">
        <li className="list-disc">Follow the guided prompt.</li>
        <li className="list-disc">Validate your answer with the built-in checklist.</li>
        <li className="list-disc">Review your progress before moving on.</li>
      </ul>
    </div>
  ),
  'independent-practice': (
    <div className="space-y-4 text-slate-600">
      <p>
        Apply the concepts independently in a short exercise that encourages critical thinking and problem solving.
      </p>
      <p className="text-sm text-slate-500">This section is designed to bridge guided learning with hands-on application.</p>
    </div>
  ),
  resources: (
    <div className="space-y-4 text-slate-600">
      <ul className="space-y-3 pl-5">
        <li className="list-disc">Download the lesson slide deck.</li>
        <li className="list-disc">Access the recommended reading list.</li>
        <li className="list-disc">Explore the interactive code examples.</li>
      </ul>
    </div>
  ),
  quiz: (
    <div className="space-y-4 text-slate-600">
      <p>Test your understanding with a short quiz that covers the main lesson concepts and practical takeaways.</p>
      <ol className="space-y-3 pl-5 list-decimal">
        <li>What is the most important step when reviewing dashboard metrics?</li>
        <li>How does guided practice improve retention?</li>
      </ol>
    </div>
  ),
  assignment: (
    <div className="space-y-4 text-slate-600">
      <p>
        Build a mini project using the lesson patterns and submit it as your assignment. Focus on clarity, interaction, and learner value.
      </p>
      <p className="text-sm text-slate-500">This assignment helps transition from concept to production-ready thinking.</p>
    </div>
  ),
  summary: (
    <div className="space-y-4 text-slate-600">
      <ul className="space-y-3 pl-5 list-disc">
        <li>Lesson structure is designed for clarity and motivation.</li>
        <li>Progress feedback keeps learners on track.</li>
        <li>Guided and independent practice reinforce the core concepts.</li>
      </ul>
    </div>
  ),
  'next-lesson': (
    <div className="space-y-4 text-slate-600">
      <p>
        Continue to the next lesson for advanced visualization techniques and learner engagement strategies in Obara Academy.
      </p>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <p className="font-semibold text-slate-900">Coming next</p>
        <p className="text-sm text-slate-500">Advanced dashboard storytelling with adaptive learning prompts.</p>
      </div>
    </div>
  ),
}

export default function LessonPage() {
  const [activeSection, setActiveSection] = useState(lessonSections[0].id)
  const [complete, setComplete] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const progress = useMemo(() => {
    const activeIndex = lessonSections.findIndex((section) => section.id === activeSection)
    return Math.round(((activeIndex + 1) / lessonSections.length) * 100)
  }, [activeSection])

  const handleNavigate = useCallback((id: string) => {
    const section = sectionRefs.current[id]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveSection(id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.3 }
    )

    lessonSections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        sectionRefs.current[section.id] = element
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen px-6 py-8 xl:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[300px_1fr]">
        <LessonSidebar
          sections={lessonSections}
          activeSection={activeSection}
          progress={progress}
          onNavigate={handleNavigate}
        />

        <div className="space-y-8">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">{lessonMetadata.moduleTitle}</p>
                <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">{lessonMetadata.lessonTitle}</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>Estimated duration: {lessonMetadata.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>Difficulty: {lessonMetadata.difficulty}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">XP {lessonMetadata.xp}</Badge>
                <Badge variant="secondary">{complete ? 'Completed' : 'In progress'}</Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="ghost" className="w-full justify-center">
                Previous Lesson
              </Button>
              <Button className="w-full justify-center" onClick={() => setComplete((current) => !current)}>
                {complete ? 'Mark as incomplete' : 'Mark lesson as complete'}
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {lessonSections.map((section, index) => (
              <div key={section.id} ref={(node) => (sectionRefs.current[section.id] = node)}>
                <LessonSection
                  id={section.id}
                  title={section.title}
                  description={section.description}
                  defaultOpen={index === 0}
                >
                  {sectionContent[section.id]}
                </LessonSection>
              </div>
            ))}
          </div>

          <Card className="gap-6 rounded-[2rem] border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Ready for the next lesson?</h2>
                <p className="text-sm text-slate-600">Keep your momentum going with the next module in the Obara Academy curriculum.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">Review summary</Button>
                <Button>Go to next module</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
