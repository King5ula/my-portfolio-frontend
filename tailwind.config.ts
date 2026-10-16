import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Each color is a CSS custom property from app/globals.css, so the
      // dark/light toggle restyles everything without per-class variants.
      colors: {
        bg: "var(--bg-color)",
        ink: "var(--text-main)",
        muted: "var(--text-muted)",
        accent: "var(--accent-color)",
        "accent-ink": "var(--accent-ink)",
        surface: "var(--surface-bg)",
        line: "var(--surface-border)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1.4s infinite both",
      },
    },
  },
  plugins: [],
};

export default config;
