import { BloomMark } from '../components/BloomMark'

export function Hero() {
  return (
    <section className="u-shell main hero" id="greeting">
      <div className="hero__text">
        <p className="festive">
          <BloomMark size={16} petals={9} />
          Happy Teachers&rsquo; Day
        </p>

        <h1 className="headline">
          You taught us to look <em>twice</em>.
        </h1>

        <p className="lede">
          The fifth of October. Flowers at the gate, somebody&rsquo;s lunch in the front
          row, and an hour of assembly you actually looked forward to. This is the
          thank-you we never got round to writing in class.
        </p>

        <div className="hero__actions">
          <a className="u-cta u-cta--solid" href="#wishes">
            Open the wishes
          </a>
          <a className="u-cta" href="#letter">
            Read the letter
          </a>
        </div>
      </div>

      <div className="hero__seal">
        <BloomMark size={230} petals={18} />
        <p className="hero__seal-text">For you</p>
      </div>
    </section>
  )
}