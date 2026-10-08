export function Board() {
  return (
    <section className="board" id="board">
      <div className="board__inner u-shell">
        <p className="board__kicker">Happy Teachers&rsquo; Day</p>
        <p className="board__line">You were the reason the room was worth walking into.</p>
        <span className="board__tray" aria-hidden="true">
          <span className="board__chalk board__chalk--a" />
          <span className="board__chalk board__chalk--b" />
          <span className="board__chalk board__chalk--c" />
        </span>
      </div>
    </section>
  )
}
