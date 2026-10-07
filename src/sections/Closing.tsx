import { BloomMark } from '../components/BloomMark'

export function Closing() {
  return (
    <footer className="closing">
      <div className="u-shell closing__inner">
        <BloomMark size={44} className="closing__mark" />

        <p className="closing__festive">Happy Teachers&rsquo; Day</p>

        <p className="closing__line">Nothing I know, I worked out myself.</p>

        <p className="closing__meta">
          <span>Sheikh Mohammad Ahmed</span>
          <span>Made with three.js</span>
        </p>

        <div className="closing__actions">
          <a className="u-cta" href="#top">
            Back to the top
          </a>
          <a className="u-cta" href="#wishes">
            Shuffle the wishes again
          </a>
        </div>
      </div>
    </footer>
  )
}