import { Scene } from '../three/Scene'

export function Hero() {
  return (
    <section className="u-shell main split" id="book">
      <div className="split__text">
        <h1 className="headline">
          You taught us to look <em>twice</em>.
        </h1>
        <p className="lede">
          At a page. At a problem. At each other. This is the thank-you we never got
          round to writing in class.
        </p>
        <div className="closing__actions">
          <a className="u-cta" href="#cards">
            Turn the page
          </a>
          <a className="u-cta" href="#letter">
            Read the letter
          </a>
        </div>
      </div>

      <div className="split__scene">
        <Scene kind="book" />
      </div>
    </section>
  )
}