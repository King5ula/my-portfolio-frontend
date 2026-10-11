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
        surface: "var(--surface-bg)",
        line: "var(--surface-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      screens: {
        // Where the project grid goes from one column to two.
        bento: "901px",
      },
      keyframes: {
        "text-pop-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-6px)" },
          "60%": { transform: "translateY(-3px)" },
        },
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
        "text-pop-up": "text-pop-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scroll-bounce": "scroll-bounce 2s infinite",
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1.4s infinite both",
      },
    },
  },
  plugins: [],
};

export default config;
