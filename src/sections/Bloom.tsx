import { Scene } from '../three/Scene'

const givers = [
  {
    who: 'She read our work twice',
    what: 'Because the first time she was looking for the mistake, and the second time she was looking for what we were actually trying to say.',
  },
  {
    who: 'He answered the same question three ways',
    what: 'We never noticed he was answering it three ways. We just remember that we always got an answer, at any hour, without a single sigh.',
  },
  {
    who: 'They sat with us after the bell',
    what: 'Volleyball, chemistry, the girl who was crying, the boy who could not read. Nobody told them to. Nobody thanked them for it, either.',
  },
  {
    who: 'They made us feel stupid safely',
    what: 'A wrong answer in that classroom cost you nothing. You got it wrong, understood why, and tried again in front of everyone. That is a rare gift.',
  },
  {
    who: 'They remembered our names',
    what: 'Not our rolls. Our names, in the second week, before we had earned any of it. We have never forgotten being expected.',
  },
  {
    who: 'They let us change our minds',
    what: 'A teacher who is certain is easy to follow and hard to grow up next to. Ours were certain about us, and patient about everything we had yet to decide.',
  },
]

export function Bloom() {
  return (
    <>
      <section className="u-shell split" id="bloom">
        <div className="split__text">
          <p className="kicker">Happy Teachers&rsquo; Day</p>
          <h2 className="headline headline--section">Marigolds, because marigolds.</h2>
          <p className="body">
            In every classroom we grew up in, the flower was a marigold — cheap,
            impossible to kill, and impossible to ignore. It survives a windowsill, a
            water bottle, a school corridor. It turns towards whatever light there is.
            That felt like the right thing to hand you.
          </p>
        </div>

        <div className="split__scene split__scene--tall">
          <Scene kind="bloom" />
        </div>

        <div className="pair">
          <div className="pair__side pair__side--her">
            <p className="pair__head">
              <span className="pair__name">For her</span>
            </p>
            <p className="pair__line">
              She kept the good pen for the essay you were sure you had ruined, and made
              you read it back anyway. She was never tired of you. You just could not see
              it.
            </p>
          </div>

          <div className="pair__side pair__side--him">
            <p className="pair__head">
              <span className="pair__name">For him</span>
            </p>
            <p className="pair__line">
              He stayed after the bell to re-run the demonstration that failed, then
              pretended it had worked the first time so nobody lost confidence. He was
              tired. He never let you see it.
            </p>
          </div>
        </div>
      </section>

      <section className="u-shell ledger" id="gave">
        <div className="ledger__head">
          <p className="kicker">Happy Teachers&rsquo; Day</p>
          <h2 className="headline headline--section">What they actually gave us.</h2>
          <p className="body">
            Nobody hands you a list when you leave school. It arrives much later, in
            pieces, usually on a bad day. Here are ours.
          </p>
        </div>

        <ul className="ledger__list">
          {givers.map((item) => (
            <li className="ledger__item" key={item.who}>
              <span className="ledger__bullet" aria-hidden="true" />
              <h3 className="ledger__who">{item.who}</h3>
              <p className="ledger__what">{item.what}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}