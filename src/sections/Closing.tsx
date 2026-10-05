import { BloomMark } from '../components/BloomMark'

export function Closing() {
  return (
    <footer className="closing">
      <div className="u-shell closing__inner">
        <BloomMark size={44} className="closing__mark" />

        <p className="closing__line">Nothing we know, we worked out ourselves.</p>

        <p className="closing__meta">
          <span>Teachers&rsquo; Day</span>
          <span>Made with three.js</span>
        </p>

        <div className="closing__actions">
          <a className="u-cta" href="#top">
            Back to the top
          </a>
          <a className="u-cta" href="#book">
            Open the book again
          </a>
        </div>
      </div>
    </footer>
  )
}