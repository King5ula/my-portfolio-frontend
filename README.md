# Portfolio Frontend

My developer portfolio: hero, tech stack, projects, contact links, and a
"David AI Clone" chat widget.

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Pairs with
the backend repo, `my-portfolio-backend` (FastAPI), which the chat widget
calls over REST.

## Quickstart

```bash
npm install
cp .env.example .env.local   # optional: defaults to http://localhost:8000
npm run dev
```

Open `http://localhost:3000`. The chat widget needs the backend running;
everything else works without it.

```bash
npm run build       # production build
npm run typecheck   # tsc --noEmit
npm run lint        # next lint (next/core-web-vitals)
npm run test        # vitest run
```

## Project layout

```
app/           layout.tsx (fonts, metadata), page.tsx (the one page), globals.css (theme tokens)
components/    One file per section, plus ThemeShell (dark/light toggle) and ChatWidget
lib/           config.ts (env), api-client.ts (backend calls), schemas.ts (Zod), tech-stack.ts (data)
public/        Icons, the project video and screenshot
```

## Configuration

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | Base URL of the FastAPI backend | `http://localhost:8000` |

## Theming

Colors are CSS custom properties in `app/globals.css`, mapped to Tailwind
color names in `tailwind.config.ts` (`bg`, `ink`, `muted`, `accent`,
`surface`, `line`). The light theme only overrides the variables, so
components never need per-theme classes.
