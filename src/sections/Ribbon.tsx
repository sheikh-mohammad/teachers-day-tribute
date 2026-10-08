import { Fragment } from 'react'

const greetings = Array.from({ length: 6 }, (_, i) => i)

function Track() {
  return (
    <>
      {greetings.map((g) => (
        <Fragment key={g}>
          <span className="ribbon__item">Happy Teachers&rsquo; Day</span>
          <span className="ribbon__dot" />
        </Fragment>
      ))}
    </>
  )
}

export function Ribbon() {
  return (
    <section className="ribbon">
      <p className="u-sr">Happy Teachers&rsquo; Day</p>
      <div className="ribbon__track" aria-hidden="true">
        <Track />
        <Track />
      </div>
    </section>
  )
}
