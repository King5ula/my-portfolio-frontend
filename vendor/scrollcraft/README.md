# scroll-craft engine (vendored)

`scrollcraft.js` and `scrollcraft.css` are copied verbatim from
[nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft) v0.3.1
(MIT), `plugins/nateherk-design/skills/scroll-craft/engine/`.

Never edit these per project. Theme through the `--sc-*` tokens in
`app/globals.css` and put bespoke behaviour in components, driven off the
`--sc-p` custom property the engine publishes. To upgrade, copy the new files
over these and bump the version above.

`components/ScrollCraftRoot.tsx` mounts the engine; `scrollcraft.d.ts` types it.
