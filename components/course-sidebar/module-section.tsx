import { ChevronDown } from 'lucide-react'
import type { Lesson, Module } from '../../types/course'
import { LessonItem } from './lesson-item'

interface ModuleSectionProps {
  module: Module
  activeLessonId: string
  isExpanded: boolean
  onToggle: (moduleId: string) => void
  onSelectLesson: (lesson: Lesson) => void
}

export function ModuleSection({ module, activeLessonId, isExpanded, onToggle, onSelectLesson }: ModuleSectionProps) {
  const completedCount = module.lessons.filter((lesson) => lesson.completed).length

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => onToggle(module.id)}
        className="flex w-full items-center justify-between gap-4 rounded-[2rem] px-5 py-4 text-left transition hover:bg-slate-50"
      >
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{module.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{completedCount} of {module.lessons.length} lessons complete</p>
        </div>
        <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="space-y-2 px-2 pb-4">
          {module.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              isActive={lesson.id === activeLessonId}
              onSelect={onSelectLesson}
            />
          ))}
        </div>
      )}
    </div>
  )
}
