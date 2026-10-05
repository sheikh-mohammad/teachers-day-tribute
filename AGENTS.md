# AGENTS.md

## Project
An interactive 3D Teachers' Day tribute site. Next.js + three.js, with multiple
3D animation scenes (book opening, flipping cards, blooming flowers).

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

Run `npm run lint` and `npm run build` after any change that touches code. Fix what
they report before committing.

## Git workflow
- Commit and push after **every** small change. Do not batch work into one commit at
  the end of a task.
- Stage only files you intentionally changed (`git status` and `git diff` first).
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`. Keep them short and imperative.
- Push to `origin/main` unless a branch was requested.
- Never commit `node_modules`, `.next`, `.env*`, or `.agents/`.

## Code style
- TypeScript strict. No `any` in component props; type 3D props explicitly.
- Match surrounding conventions instead of introducing new ones.
- No comments unless explicitly asked.
- Keep each 3D animation in its own component under `src/three/`.
- Reuse geometries and materials; keep `dpr` bounded so the scene runs on low-end
  classroom laptops.

## Design
- One clear focal point per section. This is a tribute, so the copy stays short and
  warm, and motion guides the reader rather than competing with the text.
- The hero is a 3D scene, so text on top of it needs contrast, not decoration.