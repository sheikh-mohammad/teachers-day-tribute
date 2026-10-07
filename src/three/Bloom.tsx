import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils } from 'three'
import type { Group } from 'three'
import { scene } from './palette'

type BloomSceneProps = {
  reduced: boolean
}

const rings = [
  { count: 16, radius: 0.72, y: -0.02, tilt: -0.14, tone: scene.accent, w: 0.16, d: 0.54 },
  { count: 13, radius: 0.5, y: 0.16, tilt: -0.36, tone: scene.rose, w: 0.14, d: 0.44 },
  { count: 10, radius: 0.3, y: 0.28, tilt: -0.6, tone: scene.goldSoft, w: 0.12, d: 0.34 },
]

export function BloomScene({ reduced }: BloomSceneProps) {
  const root = useRef<Group>(null)
  const petals = useRef<(Group | null)[]>([])
  const opened = useRef(0)
  const pointer = useThree((state) => state.pointer)

  useFrame((state, delta) => {
    opened.current = Math.min(opened.current + delta / 2.4, 1)
    const eased = 1 - (1 - opened.current) ** 3

    petals.current.forEach((petal, i) => {
      if (!petal) return
      const stagger = MathUtils.clamp((eased - i * 0.018) / 0.82, 0, 1)
      petal.rotation.x = -1.42 + stagger * 1.24
    })

    if (!root.current) return

    if (reduced) {
      root.current.rotation.y = 0
      root.current.rotation.x = 0
      return
    }

    root.current.rotation.y = MathUtils.lerp(
      root.current.rotation.y,
      pointer.x * 0.3,
      0.04,
    )
    root.current.rotation.x = MathUtils.lerp(
      root.current.rotation.x,
      -0.06 + pointer.y * 0.1,
      0.04,
    )
    root.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.04
  })

  return (
    <group ref={root} position={[0, -0.15, 0]} scale={1.05}>
      <mesh position={[0, -0.95, 0]}>
        <cylinderGeometry args={[0.032, 0.045, 1.9, 12]} />
        <meshStandardMaterial color={scene.stem} roughness={0.82} />
      </mesh>

      <mesh position={[0.19, -1.24, 0.02]} rotation={[0, 0, -0.9]}>
        <boxGeometry args={[0.42, 0.026, 0.19]} />
        <meshStandardMaterial color={scene.stemDeep} roughness={0.86} />
      </mesh>

      <mesh position={[-0.2, -1.62, -0.02]} rotation={[0, 0, 0.95]}>
        <boxGeometry args={[0.36, 0.026, 0.17]} />
        <meshStandardMaterial color={scene.stem} roughness={0.86} />
      </mesh>

      <group position={[0, 0.02, 0]}>
        {rings.map((ring, ringIndex) =>
          Array.from({ length: ring.count }, (_, i) => {
            const angle = (i / ring.count) * Math.PI * 2 + ringIndex * 0.28

            return (
              <group
                key={`${ringIndex}-${i}`}
                ref={(node) => {
                  petals.current[ringIndex * 16 + i] = node
                }}
                rotation={[0, angle, 0]}
                position={[Math.sin(angle) * ring.radius, ring.y, Math.cos(angle) * ring.radius]}
              >
                <mesh rotation={[ring.tilt, 0, 0]}>
                  <boxGeometry args={[ring.w, 0.032, ring.d]} />
                  <meshStandardMaterial
                    color={ring.tone}
                    roughness={0.58}
                    metalness={0.04}
                    emissive={scene.accentDeep}
                    emissiveIntensity={0.12}
                  />
                </mesh>
              </group>
            )
          }),
        )}

        <mesh position={[0, 0.34, 0]}>
          <sphereGeometry args={[0.13, 20, 16]} />
          <meshStandardMaterial
            color={scene.accent}
            roughness={0.55}
            emissive={scene.accentDeep}
            emissiveIntensity={0.28}
          />
        </mesh>
      </group>
    </group>
  )
}