type BloomMarkProps = {
  size?: number
  petals?: number
  className?: string
}

export function BloomMark({ size = 28, petals = 12, className }: BloomMarkProps) {
  const rings = [0, 1, 2]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Marigold"
    >
      {rings.map((ring) => {
        const step = 360 / (petals - ring * 2)
        const r = 17 - ring * 3.1
        const w = 2.9 - ring * 0.5

        return Array.from({ length: petals - ring * 2 }, (_, i) => {
          const angle = i * step + ring * 14

          return (
            <rect
              key={`${ring}-${i}`}
              x={24 - w / 2}
              y={24 - r - w / 2}
              width={w}
              height={w * 1.9}
              rx={w / 2}
              fill="var(--color-accent)"
              transform={`rotate(${angle} 24 24)`}
            />
          )
        })
      })}
      <circle cx="24" cy="24" r="3.4" fill="var(--color-gold)" />
    </svg>
  )
}