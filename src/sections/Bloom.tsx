import { Scene } from '../three/Scene'

export function Bloom() {
  return (
    <section
      className="u-shell split"
      id="bloom"
      style={{ paddingBlock: 'var(--space-3xl)' }}
    >
      <div className="split__text">
        <h2 className="headline headline--section">Marigolds, because marigolds.</h2>
        <p className="body">
          In every classroom we grew up in, the flower was a marigold — cheap, impossible
          to kill, and impossible to ignore. It survives a windowsill, a water bottle, a
          school corridor. It turns towards whatever light there is. That felt like the
          right thing to hand you.
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
            you read it back anyway. She was never tired of you. You just could not see it.
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
  )
}