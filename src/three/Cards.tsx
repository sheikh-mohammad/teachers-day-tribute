import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils } from 'three'
import type { Group } from 'three'
import { scene } from './palette'
import { wishes } from './wishes'

type CardsSceneProps = {
  reduced: boolean
  selected: number
  onSelect?: (index: number) => void
}

const CARD_W = 0.74
const CARD_H = 1.04

export function CardsScene({ reduced, selected, onSelect }: CardsSceneProps) {
  const group = useRef<Group>(null)
  const cards = useRef<(Group | null)[]>([])
  const [hovered, setHovered] = useState<number | null>(null)
  const pointer = useThree((state) => state.pointer)
  const count = wishes.length

  useFrame((state) => {
    if (!group.current) return

    if (!reduced) {
      group.current.rotation.y = MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.18,
        0.04,
      )
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.025
    }

    const lift = Math.min(3, count - 1)

    cards.current.forEach((card, i) => {
      if (!card) return

      const fromEdge = i - Math.floor(count / 2)
      const t = fromEdge / lift
      const stackZ = -i * 0.055
      const stackTilt = (i % 2 === 0 ? 1 : -1) * 0.035

      const isFront = i === selected || i === hovered
      const targetX = MathUtils.lerp(fromEdge * 0.085, t * 2.15, isFront ? 1 : 0)
      const targetY = isFront ? 0.09 : 0
      const targetZ = isFront ? 0.5 : stackZ
      const targetRotY = MathUtils.lerp(-t * 0.62, -t * 0.24, isFront ? 1 : 0)
      const targetRotZ = MathUtils.lerp(stackTilt, 0, isFront ? 1 : 0)
      const targetScale = isFront ? 1.12 : 0.94

      card.position.x = MathUtils.lerp(card.position.x, targetX, 0.11)
      card.position.y = MathUtils.lerp(card.position.y, targetY, 0.11)
      card.position.z = MathUtils.lerp(card.position.z, targetZ, 0.11)
      card.rotation.y = MathUtils.lerp(card.rotation.y, targetRotY, 0.11)
      card.rotation.z = MathUtils.lerp(card.rotation.z, targetRotZ, 0.11)
      card.scale.setScalar(MathUtils.lerp(card.scale.x, targetScale, 0.11))
    })
  })

  return (
    <group ref={group} position={[0, -0.05, 0]}>
      {wishes.map((wish, i) => {
        const fromEdge = i - Math.floor(count / 2)

        return (
          <group
            key={wish.text}
            ref={(node) => {
              cards.current[i] = node
            }}
            position={[-fromEdge * 0.085, 0, -i * 0.055]}
            rotation={[0, fromEdge * 0.62, i % 2 === 0 ? 0.035 : -0.035]}
            scale={0.94}
          >
            <mesh
              onClick={(event) => {
                event.stopPropagation()
                onSelect?.(i)
              }}
              onPointerOver={(event) => {
                event.stopPropagation()
                setHovered(i)
                document.body.style.cursor = 'pointer'
              }}
              onPointerOut={() => {
                setHovered(null)
                document.body.style.cursor = ''
              }}
            >
              <boxGeometry args={[CARD_W, CARD_H, 0.045]} />
              <meshStandardMaterial color={scene.paperRaised} roughness={0.9} metalness={0} />
            </mesh>

            <mesh position={[0, CARD_H / 2 - 0.17, 0.024]}>
              <circleGeometry args={[0.075, 24]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? scene.teal : i % 3 === 1 ? scene.accent : scene.gold}
                roughness={0.5}
                emissive={scene.accentDeep}
                emissiveIntensity={0.22}
              />
            </mesh>

            <mesh position={[0, -CARD_H / 2 + 0.2, 0.024]}>
              <boxGeometry args={[0.4, 0.012, 0.01]} />
              <meshStandardMaterial color={scene.rule} roughness={1} />
            </mesh>

            <mesh position={[0, -CARD_H / 2 + 0.13, 0.024]}>
              <boxGeometry args={[0.26, 0.012, 0.01]} />
              <meshStandardMaterial color={scene.rule} roughness={1} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}