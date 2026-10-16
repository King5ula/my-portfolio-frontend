# my-portfolio

Next.js 14 (App Router) + TypeScript + Tailwind. See README.md for commands
and layout. Checks before calling work done: `npm run typecheck`,
`npm run lint`, `npm run test`, `npm run build`.

## Using the scroll-craft skill here

The `scroll-craft` skill (user-wide, `~/.claude/skills/scroll-craft`) assumes a
standalone static HTML page. This repo is a React app, so follow the skill's
process (Step 0 brief, grammar, fingerprint gate, feeling curve, score, hard
rules, Step 5 verification) with these overrides. Where they conflict, this
section wins.

**Already done, do not redo:**
- Engine is vendored unmodified at `vendor/scrollcraft/` (skill's "copy the
  engine into the build folder" step). Never edit it.
- `components/ScrollCraftRoot.tsx` calls `ScrollCraft.mount()` on its wrapper
  and `destroy()` on unmount. `app/page.tsx` wraps the sections in it. Do not
  add `<script>` tags or call `mount()` anywhere else.
- `--sc-*` tokens are mapped to the site theme in `app/globals.css`, so the
  dark/light toggle themes engine markup. Rebrand by changing the theme
  variables there, not by hardcoding `--sc-*` values in components.

**Step 4 (build) becomes:**
- Author sections as React components in `components/`, one per act, putting
  `data-sc-*` attributes and `sc-*` classes on JSX. Use Tailwind for layout and
  the engine's classes/attributes for scroll behaviour.
- Bespoke JS (the signature move) lives in a `"use client"` component reading
  `--sc-p`, never in the engine.
- Content comes from `lib/` (`missions.ts`, `tech-stack.ts`); keep those data
  sources and their tests rather than hardcoding copy.
- Keep the existing features working: `ChatWidget` (stays outside
  `ScrollCraftRoot`, it is fixed-position), `ContactForm`, `ThemeShell` nav and
  toggle. The page grammar can restyle them; it cannot drop them.
- Assets go in `public/scrollcraft/<build>/` and are referenced as
  `/scrollcraft/<build>/...`. Plain `<video>`/`<img>` are fine for scrub and
  parallax planes (the engine needs the raw element).
- Existing hard-rule violations in the current site are fair game to remove
  (e.g. the Hero's bouncing scroll cue).

**Workspace:** the skill's default, `scrollcraft/` at the repo root.
`BRIEF.md` and `FINGERPRINTS.md` are committed; `lab/` and `out/` are not.

**Step 5 (verify) becomes:** skip `serve.mjs`. Run the real app
(`npm run build && npm start`, port 3000) and point `shoot.mjs` at
`http://localhost:3000`. `playwright-core` is a devDependency here.

**Never submit the contact form or send chat messages in automated tests.**
`.env.local` points `NEXT_PUBLIC_BACKEND_URL` at the live Render backend, so a
test submission reaches David for real.

**Environment:** ffmpeg is not installed (needed only to encode clips with
`encode.sh`). No `KIE_AI_API_KEY`; build from own assets unless one is added.
