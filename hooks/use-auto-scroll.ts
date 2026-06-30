import { useEffect, useRef } from 'react'

export function useAutoScrollToActiveLesson(activeLessonId: string) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const activeSelector = `[data-lesson-id="${activeLessonId}"]`
    const activeNode = containerRef.current?.querySelector<HTMLButtonElement>(activeSelector)

    if (activeNode) {
      activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }
  }, [activeLessonId])

  return containerRef
}
