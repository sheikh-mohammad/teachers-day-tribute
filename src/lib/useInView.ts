import { useEffect, useRef } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.inView = 'true'
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