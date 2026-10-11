"use client";

import { useState, type ReactNode } from "react";

type Theme = "dark" | "light";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#missions", label: "Missions" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Owns the dark/light toggle. The theme's CSS variables are scoped to this
// wrapper's data-theme attribute, so everything themed must render inside it.
export function ThemeShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-bg text-ink transition-colors duration-[400ms]"
    >
      <nav className="flex items-center justify-between gap-6 p-5 md:px-10 md:py-6">
        <div className="text-[1.2rem] font-bold tracking-[-0.02em]">
          const DevPortfolio = DavidTuisaula
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.95rem] font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="shrink-0 rounded-[20px] border border-line bg-surface px-4 py-2 font-medium text-ink"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
