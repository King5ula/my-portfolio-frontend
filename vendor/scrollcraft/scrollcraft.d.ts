// Types for the vendored scroll-craft engine (scrollcraft.js, v0.3.1).
// The engine is a side-effect script: importing it sets window.ScrollCraft.
// It reads matchMedia at load, so only import it in the browser.

export interface ScrollCraftInstance {
  layout(): void;
  read(): void;
  destroy(): void;
}

export interface ScrollCraftGlobal {
  mount(root?: Element | Document | string, opts?: Record<string, unknown>): ScrollCraftInstance;
  reduce: boolean;
  instances: ScrollCraftInstance[];
}

declare global {
  interface Window {
    ScrollCraft?: ScrollCraftGlobal;
  }
}
