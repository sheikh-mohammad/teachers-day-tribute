/**
 * Mirrors the OKLCH triples declared in src/tokens.css so the WebGL scenes read
 * from the same palette as the DOM. three.js cannot parse oklch() strings, so the
 * values are converted to sRGB here rather than duplicated as hex in the markup.
 */
type Oklch = [l: number, c: number, h: number]

const fromLinear = (v: number) =>
  v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1)

export function oklchToRgb([l, c, h]: Oklch): [number, number, number] {
  const rad = (h * Math.PI) / 180
  const a = c * Math.cos(rad)
  const b = c * Math.sin(rad)

  const lRoot = l + 0.3963377774 * a + 0.2158037573 * b
  const mRoot = l - 0.1055613458 * a - 0.0638541728 * b
  const sRoot = l - 0.0894841775 * a - 1.291485548 * b

  const lCubed = lRoot ** 3
  const mCubed = mRoot ** 3
  const sCubed = sRoot ** 3

  const r = 4.0767416621 * lCubed - 3.3077115913 * mCubed + 0.2309699292 * sCubed
  const g = -1.2684380046 * lCubed + 2.6097574011 * mCubed - 0.3413193965 * sCubed
  const bl = -0.0041960863 * lCubed - 0.7034186147 * mCubed + 1.707614701 * sCubed

  return [clamp01(fromLinear(r)), clamp01(fromLinear(g)), clamp01(fromLinear(bl))]
}

export function oklchToHex(triple: Oklch) {
  const [r, g, b] = oklchToRgb(triple)
  const hex = [r, g, b]
    .map((channel) => Math.round(channel * 255).toString(16).padStart(2, '0'))
    .join('')

  return `#${hex}`
}

export const scene = {
  paper: oklchToHex([96.2, 0.019, 72]),
  paperRaised: oklchToHex([98.4, 0.013, 72]),
  paperSunk: oklchToHex([87.8, 0.038, 66]),
  rule: oklchToHex([81.5, 0.044, 62]),
  ink: oklchToHex([26.5, 0.058, 338]),
  inkSoft: oklchToHex([37.5, 0.046, 348]),
  accent: oklchToHex([78.5, 0.152, 80]),
  accentDeep: oklchToHex([66, 0.155, 72]),
  accentInk: oklchToHex([47, 0.108, 70]),
  goldSoft: oklchToHex([88, 0.082, 84]),
  rose: oklchToHex([54.5, 0.168, 16]),
  roseDeep: oklchToHex([44, 0.15, 14]),
  stem: oklchToHex([46.5, 0.092, 152]),
  stemDeep: oklchToHex([37, 0.08, 152]),
} as const