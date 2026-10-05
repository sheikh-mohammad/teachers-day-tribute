import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils } from 'three'
import type { Group } from 'three'
import { scene } from './palette'

type BookSceneProps = {
  reduced: boolean
}

const W = 2.24
const D = 3.04
const HINGE = -W / 2

export function BookScene({ reduced }: BookSceneProps) {
  const root = useRef<Group>(null)
  const cover = useRef<Group>(null)
  const opened = useRef(0)
  const pointer = useThree((state) => state.pointer)

  useFrame((state, delta) => {
    opened.current = Math.min(opened.current + delta / 1.9, 1)
    const eased = 1 - (1 - opened.current) ** 3

    if (cover.current) {
      cover.current.rotation.z = MathUtils.lerp(cover.current.rotation.z, eased * 2.05, 0.12)
    }

    if (!root.current) return

    if (reduced) {
      root.current.rotation.y = 0
      root.current.rotation.x = 0.28
      return
    }

    root.current.rotation.x = MathUtils.lerp(root.current.rotation.x, 0.24, 0.05)
    root.current.rotation.y = MathUtils.lerp(
      root.current.rotation.y,
      pointer.x * 0.22,
      0.04,
    )
    root.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.035
  })

  return (
    <group ref={root} position={[0, -0.1, 0]} rotation={[0.28, 0, 0]}>
      <mesh position={[0, -0.135, 0]}>
        <boxGeometry args={[W, 0.07, D]} />
        <meshStandardMaterial color={scene.ink} roughness={0.72} metalness={0.02} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[W - 0.14, 0.2, D - 0.14]} />
        <meshStandardMaterial color={scene.paperRaised} roughness={0.94} metalness={0} />
      </mesh>

      {[0, 1, 2, 3, 4, 5].map((line) => (
        <mesh key={line} position={[0.16 + (line % 2) * 0.06, 0.104, -0.86 + line * 0.29]}>
          <boxGeometry args={[0.86 - (line % 3) * 0.16, 0.004, 0.036]} />
          <meshStandardMaterial color={scene.rule} roughness={1} />
        </mesh>
      ))}

      <group ref={cover} position={[HINGE, 0, 0]} rotation={[0, 0, 0]}>
        <mesh position={[W / 2, 0.14, 0]}>
          <boxGeometry args={[W, 0.07, D]} />
          <meshStandardMaterial color={scene.ink} roughness={0.66} metalness={0.03} />
        </mesh>

        <mesh position={[W / 2, 0.176, 0]}>
          <boxGeometry args={[1.28, 0.006, 0.92]} />
          <meshStandardMaterial
            color={scene.accent}
            roughness={0.42}
            metalness={0.18}
            emissive={scene.accentDeep}
            emissiveIntensity={0.14}
          />
        </mesh>

        <mesh position={[W / 2, 0.18, 1.24]}>
          <boxGeometry args={[0.34, 0.006, 0.34]} />
          <meshStandardMaterial color={scene.accentInk} roughness={0.5} />
        </mesh>
      </group>
    </group>
  )
}