import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo, JetBrains_Mono } from "next/font/google";
// Engine CSS first, so Tailwind's preflight and utilities win any overlap.
import "@/vendor/scrollcraft/scrollcraft.css";
import "./globals.css";

// Variable width axis: the poster name sets expanded, the stack wall condensed.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "David Tuisaula | Full Stack Developer",
  description:
    "Full stack developer. Led the technical build of a live AI product, now building a field service system for Pacific Generators.",
  icons: {
    // The .ico is the fallback for browsers that don't take SVG favicons.
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
