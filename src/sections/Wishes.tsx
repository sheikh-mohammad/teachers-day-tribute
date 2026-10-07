import { useCallback, useState } from 'react'
import { BloomMark } from '../components/BloomMark'
import { Scene } from '../three/Scene'
import { wishes } from '../three/wishes'

function shuffle<T>(items: T[]): T[] {
  const next = [...items]

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }

  return next
}

export function Wishes() {
  const [order, setOrder] = useState<number[]>(() =>
    wishes.map((_, i) => i),
  )
  const [front, setFront] = useState(0)
  const [turn, setTurn] = useState<number[]>([])

  const deal = useCallback(() => {
    setOrder((prev) => {
      const shuffled = shuffle(prev.map((_, i) => i))
      setFront(shuffled[0])
      setTurn([])
      return shuffled
    })
  }, [])

  const flip = useCallback((index: number) => {
    setFront(index)
    setTurn((prev) => (prev.includes(index) ? prev : [...prev, index]))
  }, [])

  return (
    <section className="u-shell split split--flip" id="wishes">
      <div className="split__scene">
        <Scene kind="cards" selected={front} onSelect={flip} />
        <p className="split__hint">Every card turns. Give it a try.</p>
      </div>

      <div className="split__text">
        <h2 className="headline headline--section">
          A handful of things we should have said.
        </h2>
        <p className="body">
          Happy Teachers&rsquo; Day. We each wrote one, shuffled them, and let you deal
          them yourself — because handing someone a card politely is one thing, and making
          them come and choose is closer to how a classroom actually feels.
        </p>

        <div className="shuffle">
          <button className="u-cta u-cta--solid" type="button" onClick={deal}>
            Shuffle the wishes
          </button>
          <span className="shuffle__count">
            {turn.length} of {wishes.length} turned
          </span>
        </div>

        <ol className="wishes">
          {order.map((wishIndex, position) => {
            const wish = wishes[wishIndex]
            const isFront = position === 0

            return (
              <li key={wishIndex} className={isFront ? 'is-front' : undefined}>
                <button
                  className={`wishes__card${turn.includes(wishIndex) ? ' is-turned' : ''}`}
                  type="button"
                  onClick={() => flip(wishIndex)}
                >
                  <span className="wishes__face wishes__face--back">
                    <BloomMark size={15} petals={8} />
                    Tap to read
                  </span>
                  <span className="wishes__face wishes__face--front">{wish.text}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}