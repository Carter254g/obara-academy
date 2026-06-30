import { useState } from 'react'
import { Button } from './button'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface PracticeStep {
  title: string
  instruction: string
  tips?: string[]
}

interface PracticeActivityProps {
  title: string
  description: string
  steps: PracticeStep[]
  estimatedTime: string
}

export function PracticeActivity({ title, description, steps, estimatedTime }: PracticeActivityProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set([0]))

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  const toggleComplete = (index: number) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(index)) {
      newCompleted.delete(index)
    } else {
      newCompleted.add(index)
    }
    setCompletedSteps(newCompleted)
  }

  const allCompleted = completedSteps.size === steps.length

  return (
    <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900">🎯 {title}</h3>
        <p className="text-slate-600">{description}</p>
        <p className="text-sm text-slate-500">Estimated time: {estimatedTime}</p>
      </div>

      <div className="space-y-2">
        {steps.map((step, index) => {
          const isExpanded = expandedStep === index
          const isCompleted = completedSteps.has(index)

          return (
            <div key={index} className="overflow-hidden rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => toggleStep(index)}
                aria-expanded={isExpanded}
                aria-controls={`practice-step-${index}`}
                className={`w-full px-4 py-3 flex items-center justify-between transition-all duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  isExpanded ? 'bg-sky-50' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3 text-left flex-1">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full font-semibold text-xs ${
                      isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <div>
                    <p className={`font-semibold ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                      {step.title}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div id={`practice-step-${index}`} className="border-t border-slate-200 bg-slate-50 p-4 space-y-4 transition-all duration-300">
                  <p className="text-slate-700">{step.instruction}</p>

                  {step.tips && step.tips.length > 0 && (
                    <div className="rounded-lg bg-blue-50 p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-2">💡 Tips:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIdx) => (
                          <li key={tipIdx} className="text-xs text-blue-800">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    variant={isCompleted ? 'secondary' : 'primary'}
                    onClick={() => toggleComplete(index)}
                    className="w-full"
                  >
                    {isCompleted ? '✓ Completed' : 'Mark as Complete'}
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {allCompleted && (
        <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200">
          <p className="text-sm font-semibold text-emerald-900">
            🎉 Great job! You've completed all the practice steps. You're ready to move on to the assignment.
          </p>
        </div>
      )}
    </div>
  )
}
