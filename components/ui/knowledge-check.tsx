import { useState } from 'react'
import { Button } from './button'
import { Check, X } from 'lucide-react'

interface QuestionOption {
  id: string
  text: string
  isCorrect: boolean
}

interface KnowledgeCheckQuestion {
  id: string
  question: string
  options: QuestionOption[]
  explanation?: string
}

interface KnowledgeCheckProps {
  questions: KnowledgeCheckQuestion[]
}

export function KnowledgeCheck({ questions }: KnowledgeCheckProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentIndex]
  const selectedAnswer = selectedAnswers[currentQuestion.id]
  const correctOption = currentQuestion.options.find((opt) => opt.isCorrect)
  const isAnswerCorrect = selectedAnswer === correctOption?.id

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionId,
    })
    setShowExplanation(false)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowExplanation(false)
    }
  }

  const handleReveal = () => {
    setShowExplanation(true)
  }

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100)

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Knowledge Check</h3>
          <span className="text-sm text-slate-600">
            {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-200">
          <div
            className="h-1.5 rounded-full bg-sky-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="mb-4 text-base font-semibold text-slate-900">{currentQuestion.question}</h4>
        <div className="space-y-2" role="list" aria-label="Knowledge check options">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id
            const showCorrect = showExplanation && option.isCorrect
            const showIncorrect = showExplanation && isSelected && !option.isCorrect

            return (
              <button
                key={option.id}
                onClick={() => !selectedAnswer && handleSelectAnswer(option.id)}
                disabled={!!selectedAnswer}
                className={`w-full rounded-lg border-2 p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  showCorrect
                    ? 'border-emerald-500 bg-emerald-50'
                    : showIncorrect
                    ? 'border-red-500 bg-red-50'
                    : isSelected
                    ? 'border-sky-500 bg-sky-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    showCorrect ? 'text-emerald-900' : showIncorrect ? 'text-red-900' : 'text-slate-900'
                  }`}>
                    {option.text}
                  </span>
                  {showCorrect && <Check className="h-5 w-5 text-emerald-600" />}
                  {showIncorrect && <X className="h-5 w-5 text-red-600" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selectedAnswer && !showExplanation && (
        <div className="mb-4">
          {isAnswerCorrect ? (
            <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">
              ✓ Correct! Well done.
            </div>
          ) : (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-900">
              ✗ Not quite. Try again or see the explanation.
            </div>
          )}
        </div>
      )}

      {selectedAnswer && showExplanation && currentQuestion.explanation && (
        <div className="mb-4 rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-900 mb-1">Explanation:</p>
          <p className="text-sm text-slate-700">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex gap-2">
        {selectedAnswer && !showExplanation && (
          <Button variant="secondary" onClick={handleReveal} className="flex-1">
            Show Explanation
          </Button>
        )}
        {currentIndex < questions.length - 1 && selectedAnswer && (
          <Button onClick={handleNext} className="flex-1">
            Next Question
          </Button>
        )}
        {currentIndex === questions.length - 1 && selectedAnswer && (
          <Button onClick={() => setCurrentIndex(0)} className="flex-1">
            Start Over
          </Button>
        )}
      </div>
    </div>
  )
}
