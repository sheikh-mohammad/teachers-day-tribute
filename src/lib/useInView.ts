import { useEffect, useRef } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.35, onEnter?: () => void) {
  const ref = useRef<T>(null)
  const enterRef = useRef(onEnter)

  useEffect(() => {
    enterRef.current = onEnter
  }, [onEnter])

  useEffect(() => {
    const node = ref.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enterRef.current?.()
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}