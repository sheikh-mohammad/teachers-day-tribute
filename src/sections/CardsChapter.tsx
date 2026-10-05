import { useState } from 'react'
import { Scene, messages } from '../three/Scene'

export function CardsChapter() {
  const [active, setActive] = useState(0)

  return (
    <section className="u-shell split split--flip" id="cards">
      <div className="split__scene">
        <Scene kind="cards" selected={active} onSelect={setActive} />
      </div>

      <div className="split__text">
        <h2 className="headline headline--section">There are things we never said out loud.</h2>
        <p className="body">
          So we wrote them down, one per card, and left them face-down for a while. They
          are less awkward in writing, and we still meant every word.
        </p>

        <ul className="deck">
          {messages.map((message, i) => (
            <li key={message}>
              <button
                className={`deck__card${i === active ? ' is-active' : ''}`}
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="deck__mark" aria-hidden="true" />
                {message}
              </button>
            </li>
          ))}
        </ul>

        <p className="split__note">Tap a line to bring that card forward.</p>
      </div>
    </section>
  )
}