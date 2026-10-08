# Teachers' Day Tribute

An interactive 3D greeting for Teachers' Day, built with React, Vite, and three.js.
Instead of a flat page, the tribute is a scene you move through: cards you turn,
a marigold that blooms, and a letter at the end, with a greeting ribbon and a
school-day timetable in between.

## Technology Stack

| Layer     | Choice                    | Purpose                         |
| --------- | ------------------------- | ------------------------------- |
| Build     | Vite 8                    | Dev server and bundling         |
| UI        | React 19                  | Components and state            |
| Language  | TypeScript (strict)       | Type safety                     |
| Lint      | oxlint                    | Linting                         |
| 3D        | three.js                  | Scene graph and render loop     |
| 3D React  | `@react-three/fiber`      | Declarative three.js components |
| Helpers   | `@react-three/drei`       | Environment, text, performance  |

## Features

- **Wish cards** — a hand of cards you shuffle, then turn one at a time to read
  each message.
- **Flower bloom** — procedural petals that unfurl as the scene comes into view.
- **Scenes that sleep** — every canvas stops rendering until it scrolls into view,
  so the page stays light on low-end laptops.
- **Typographic sections** — a gradient greeting ribbon, a school-day timetable,
  greetings in ten languages, and the letter.

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints, by default http://localhost:5173.

### Scripts

| Script            | Action                        |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start the dev server          |
| `npm run build`   | Type-check and build for prod |
| `npm run preview` | Serve the production build    |
| `npm run lint`    | Run oxlint                    |

## Project Structure

```
src/
├── sections/        # page sections: hero, ribbon, wishes, bloom, day, languages, letter
├── three/           # 3D scenes and animation components
│   ├── Scene.tsx    # canvas host, lights and camera
│   ├── Cards.tsx    # shuffleable wish cards
│   ├── Bloom.tsx    # procedural marigold
│   ├── palette.ts   # OKLCH palette mirrored for WebGL
│   └── wishes.ts    # shared card messages
├── components/      # nav and the bloom mark
├── lib/             # useInView, useReducedMotion
├── App.tsx          # page composition
├── App.css          # page styles
├── index.css        # global styles
├── tokens.css       # design tokens (emerald gradient palette)
└── main.tsx         # entry point
public/             # files served as-is
```

## Development Workflow

Work on short-lived branches off `main`, open a pull request, and keep commits focused.
Every small change gets its own commit and is pushed as it lands.

## Contributing

1. Create a branch from `main`.
2. Keep TypeScript strict and run `npm run lint` and `npm run build` before opening a PR.
3. Match the existing component style: one animation concern per component in `src/three`.
4. Reuse geometries and materials when adding new 3D content, and keep `dpr` bounded —
   the scene has to run on low-end classroom laptops.

## License

Private project. All rights reserved.