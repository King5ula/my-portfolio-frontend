"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";

const ThemeContext = createContext<Theme>("dark");

// The contact section nests the opposite theme to invert the ground.
export function useTheme() {
  return useContext(ThemeContext);
}

const NAV_LINKS = [
  { href: "#missions", label: "Missions" },
  { href: "#now", label: "Now building" },
  { href: "#stack", label: "Stack" },
];

const NAV_LINK =
  "rounded-sm text-[0.9rem] font-medium text-muted transition-colors duration-150 hover:text-ink";

// Owns the dark/light toggle. The theme's CSS variables are scoped to this
// wrapper's data-theme attribute, so everything themed must render inside it.
// The bar sits over the top of the hero and scrolls away with it: the poster
// carries the page, not the chrome.
export function ThemeShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <div data-theme={theme} className="min-h-screen bg-bg text-ink">
        <nav className="absolute inset-x-0 top-0 z-[60] flex items-center justify-between gap-6 px-5 py-5 md:px-10 md:py-6">
          <a href="#top" className="mono-label rounded-sm text-ink">
            David Tuisaula
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={NAV_LINK}>
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="text-[0.9rem] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-[0.35em] transition-colors duration-150 hover:text-accent"
            >
              Get in touch
            </a>
            <button
              className="shrink-0 rounded-full border border-line px-3.5 py-1.5 text-[0.85rem] font-medium text-ink transition-colors duration-150 hover:border-ink active:translate-y-px"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </nav>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
