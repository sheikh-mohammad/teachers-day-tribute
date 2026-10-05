import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils } from 'three'
import type { Group } from 'three'
import { scene } from './palette'
import { messages } from './messages'

type CardsSceneProps = {
  reduced: boolean
  selected: number
  onSelect?: (index: number) => void
}

const SPREAD = 0.74
const CARD_W = 0.78
const CARD_H = 1.06

export function CardsScene({ reduced, selected, onSelect }: CardsSceneProps) {
  const group = useRef<Group>(null)
  const fans = useRef<(Group | null)[]>([])
  const [hovered, setHovered] = useState<number | null>(null)
  const pointer = useThree((state) => state.pointer)

  useFrame((state) => {
    if (!group.current) return

    if (!reduced) {
      group.current.rotation.y = MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.16,
        0.04,
      )
      group.current.rotation.x = MathUtils.lerp(
        group.current.rotation.x,
        pointer.y * 0.07,
        0.04,
      )
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.025
    }

    fans.current.forEach((card, i) => {
      if (!card) return

      const offset = i - (messages.length - 1) / 2
      const isFront = i === selected || i === hovered

      const targetX = offset * SPREAD
      const targetZ = isFront ? 0.42 : -Math.abs(offset) * 0.1
      const targetRotY = isFront ? -offset * 0.16 : -offset * 0.22
      const targetScale = isFront ? 1.1 : 1
      const targetRotZ = isFront ? -offset * 0.03 : offset * 0.02

      card.position.x = MathUtils.lerp(card.position.x, targetX, 0.12)
      card.position.y = MathUtils.lerp(card.position.y, isFront ? 0.07 : 0, 0.12)
      card.position.z = MathUtils.lerp(card.position.z, targetZ, 0.12)
      card.rotation.y = MathUtils.lerp(card.rotation.y, targetRotY, 0.12)
      card.rotation.z = MathUtils.lerp(card.rotation.z, targetRotZ, 0.12)
      card.scale.setScalar(MathUtils.lerp(card.scale.x, targetScale, 0.12))
    })
  })

  return (
    <group ref={group} position={[0, -0.05, 0]}>
      {messages.map((_, i) => {
        const offset = i - (messages.length - 1) / 2

        return (
          <group
            key={i}
            ref={(node) => {
              fans.current[i] = node
            }}
            position={[offset * SPREAD, 0, 0]}
            rotation={[0, -offset * 0.22, offset * 0.02]}
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

            <mesh position={[0, CARD_H / 2 - 0.19, 0.024]}>
              <circleGeometry args={[0.085, 24]} />
              <meshStandardMaterial
                color={scene.accent}
                roughness={0.5}
                emissive={scene.accentDeep}
                emissiveIntensity={0.2}
              />
            </mesh>

            <mesh position={[0, -CARD_H / 2 + 0.2, 0.024]}>
              <boxGeometry args={[0.42, 0.012, 0.01]} />
              <meshStandardMaterial color={scene.rule} roughness={1} />
            </mesh>

            <mesh position={[0, -CARD_H / 2 + 0.13, 0.024]}>
              <boxGeometry args={[0.28, 0.012, 0.01]} />
              <meshStandardMaterial color={scene.rule} roughness={1} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}