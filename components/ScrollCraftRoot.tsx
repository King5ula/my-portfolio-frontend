"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Mounts the scroll-craft engine over its children. The engine never builds
// DOM: it reads data-sc-* attributes off the markup inside this wrapper and
// drives them from scroll. It reads matchMedia at load, so it is imported in
// the effect rather than at module scope (which would also run on the server).
export function ScrollCraftRoot({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: { destroy(): void } | undefined;
    let cancelled = false;

    import("@/vendor/scrollcraft/scrollcraft").then(() => {
      if (cancelled || !ref.current || !window.ScrollCraft) return;
      instance = window.ScrollCraft.mount(ref.current);
    });

    // destroy() is idempotent, so Strict Mode's double effect is safe.
    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
