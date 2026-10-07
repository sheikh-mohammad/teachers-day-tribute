import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useInView } from '../lib/useInView'
import { useReducedMotion } from '../lib/useReducedMotion'
import { scene } from './palette'
import { CardsScene } from './Cards'
import { BloomScene } from './Bloom'

export type SceneKind = 'cards' | 'bloom'

const cameras: Record<SceneKind, { position: [number, number, number]; fov: number }> = {
  cards: { position: [0, 0.35, 3.4], fov: 38 },
  bloom: { position: [0, 0.5, 3.2], fov: 38 },
}

type SceneProps = {
  kind: SceneKind
  selected?: number
  onSelect?: (index: number) => void
}

export function Scene({ kind, selected = 0, onSelect }: SceneProps) {
  const [live, setLive] = useState(false)
  const hostRef = useInView<HTMLDivElement>(0.15, () => setLive(true))
  const reduced = useReducedMotion()

  useEffect(() => {
    const node = hostRef.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), {
      threshold: 0.05,
    })

    observer.observe(node)

    return () => observer.disconnect()
  }, [hostRef])

  return (
    <div className="scene" ref={hostRef}>
      <Canvas
        dpr={[1, 1.6]}
        frameloop={live ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={cameras[kind]}
      >
        <ambientLight intensity={1.1} />
        <hemisphereLight args={[scene.paperRaised, scene.paperSunk, 0.8]} />
        <directionalLight position={[3.2, 5, 4]} intensity={1.6} color={scene.paperRaised} />
        <directionalLight position={[-3.5, 2.4, -2]} intensity={0.45} color={scene.accent} />

        {kind === 'cards' && <CardsScene reduced={reduced} selected={selected} onSelect={onSelect} />}
        {kind === 'bloom' && <BloomScene reduced={reduced} />}
      </Canvas>
    </div>
  )
}