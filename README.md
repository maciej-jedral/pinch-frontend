# pinch-frontend

Next.js 16 (App Router, TypeScript, Tailwind v4) frontend for [Pinch](https://github.com/maciej-jedral/pinch).

This repo isn't meant to be run standalone — see the [`pinch`](https://github.com/maciej-jedral/pinch) meta-repo for the one-command local setup (`install.sh`), which wires this up together with the backend and a Postgres database via Docker Compose.

## Tooling

- `npm run lint` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run typecheck` — TypeScript, strict mode
- `npm test` — Vitest + React Testing Library

## Status

Phase 1 scaffold: the homepage fetches the backend's `GET /api/hello` (server-side, over the Docker network) and renders it, proving the stack is wired end-to-end. No real UI, auth, or API design yet — that's Phase 2; see `AGENTS.md` in the meta-repo.
