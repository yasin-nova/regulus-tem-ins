import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type SectionRevealProps = {
  id?: string
  className?: string
  children: ReactNode
}

function SectionReveal({ id, className = '', children }: SectionRevealProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={sectionRef} className={`reveal ${className}`}>
      {children}
    </section>
  )
}

export default SectionReveal
