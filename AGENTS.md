# AGENTS.md

## Project
An interactive 3D Teachers' Day tribute site. React + Vite, with multiple three.js
animation scenes (a book that opens, cards that flip, flowers that bloom).

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (oxlint)

Run `npm run lint` and `npm run build` after any change that touches code, and fix
what they report before committing.

## Git workflow
- Commit and push after **every** small change. Do not batch work into one commit.
- Stage only files you intentionally changed (`git status` and `git diff` first).
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`. Short and imperative.
- Push to `origin/main` unless a branch was requested.
- Never commit `node_modules`, `dist`, `.env*`, or `.agents/`.

## Code style
- TypeScript strict. No `any` in component props; type 3D props explicitly.
- Match the surrounding conventions instead of introducing new ones.
- No comments unless explicitly asked.
- Keep each 3D animation in its own component under `src/three/`.
- Reuse geometries and materials; keep `dpr` bounded so the scene runs on low-end
  classroom laptops.
- The scaffold uses oxlint, not ESLint. Don't add an ESLint config.

## Design
- One clear focal point per section. This is a tribute, so copy stays short and warm,
  and motion guides the reader rather than competing with the text.
- The hero is a 3D scene, so text layered on top needs contrast, not decoration.
- Not every scene needs to be a literal gift. A few abstract or typographic moments
  give the page rhythm and keep it from feeling like a template.