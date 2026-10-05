import { Scene } from '../three/Scene'

type SceneKind = 'book' | 'cards' | 'bloom'

type ChapterProps = {
  id: string
  flip?: boolean
  scene: SceneKind
  title: string
  body: string
  note: string
}

export function Chapter({ id, flip = false, scene, title, body, note }: ChapterProps) {
  return (
    <section
      className={`u-shell split${flip ? ' split--flip' : ''}`}
      id={id}
      style={{ paddingBlock: 'var(--space-3xl)' }}
    >
      <div className="split__scene">
        <Scene kind={scene} />
      </div>

      <div className="split__text">
        <h2 className="headline headline--section">{title}</h2>
        <p className="body">{body}</p>
        <p className="split__note">{note}</p>
      </div>
    </section>
  )
}