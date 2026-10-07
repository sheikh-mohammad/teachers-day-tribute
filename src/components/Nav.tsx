import { useEffect, useRef } from 'react'
import { BloomMark } from './BloomMark'
import './nav.css'

const links = [
  { href: '#wishes', label: 'The Wishes' },
  { href: '#bloom', label: 'The Flowers' },
  { href: '#gave', label: 'What You Gave' },
  { href: '#letter', label: 'The Letter' },
]

export function Nav() {
  const railRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const rail = railRef.current

    if (!rail) return

    let frame = 0

    const paint = () => {
      frame = 0
      const span = document.documentElement.scrollHeight - window.innerHeight
      const ratio = span > 0 ? Math.min(window.scrollY / span, 1) : 0
      rail.style.transform = `scaleX(${ratio})`
    }

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="nav">
      <div className="nav__progress" aria-hidden="true">
        <span ref={railRef} />
      </div>

      <div className="nav__pill">
        <a className="nav__wordmark" href="#top" aria-label="Happy Teachers' Day, back to top">
          <BloomMark size={20} petals={10} />
          <span>Happy Teachers&rsquo; Day</span>
        </a>

        <nav className="nav__rail" aria-label="Sections">
          {links.map((link) => (
            <a className="nav__link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="u-cta nav__cta" href="#letter">
          Read the letter
        </a>
      </div>
    </div>
  )
}