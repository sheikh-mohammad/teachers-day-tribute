# Teachers' Day Tribute

An interactive 3D greeting card for Teachers' Day, built with Next.js and three.js.
Instead of a flat page, the tribute is a small scene you move through: a book that
opens, cards that flip, and flowers that bloom — each one triggered by scroll or hover.

## Technology Stack

| Layer     | Choice                     | Purpose                          |
| --------- | -------------------------- | -------------------------------- |
| Framework | Next.js 15 (App Router)    | Routing, SSR, deployment         |
| Language  | TypeScript                 | Type safety                      |
| Styling   | Tailwind CSS               | Layout and typography            |
| 3D        | three.js                   | Scene graph, render loop         |
| 3D React  | `@react-three/fiber`       | Declarative three.js components  |
| Helpers   | `@react-three/drei`        | Environment, text, performance   |

## Features

- **Book animation** — cover opens on scroll, pages turn with a soft paper bend.
- **Card flips** — a grid of cards that rotate to reveal a message on the back.
- **Flower bloom** — procedural petals that unfurl as the scene is approached.
- **Shared scene** — all animations live in one persistent canvas, so transitions
  between them stay smooth instead of remounting.

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script          | Action                              |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the dev server                |
| `npm run build` | Production build                    |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Project Structure

```
src/
├── app/            # routes, layout, global styles
├── components/     # UI sections (hero, tribute list, footer)
├── three/          # 3D scenes and animation components
│   ├── Book.tsx
│   ├── Cards.tsx
│   └── Flowers.tsx
└── lib/            # shared helpers and constants
public/             # static assets
```

## Development Workflow

Work on short-lived branches off `main`, open a pull request, and keep commits focused.
The project is deployed on Vercel; every push to `main` triggers a preview build.

## Contributing

1. Create a branch from `main`.
2. Keep TypeScript strict and run `npm run lint` before opening a PR.
3. Match the existing component style: one animation concern per component in `src/three`.
4. Reduce `dpr` and reuse geometries when adding new 3D content — the scene runs on
   low-end classroom laptops.

## License

Private project. All rights reserved.