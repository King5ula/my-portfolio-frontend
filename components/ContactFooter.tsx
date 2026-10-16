"use client";

import { ContactForm } from "@/components/ContactForm";
import { useTheme } from "@/components/ThemeShell";

const LINK =
  "rounded-sm text-[length:var(--sc-t-lg)] font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors duration-150 hover:decoration-accent";

// Act 5, Resolve. The ground inverts (it nests the opposite theme) and the
// type drops to the quietest setting on the page. Nothing fades: the last
// screen holds the form, the links and the small print.
export function ContactFooter() {
  const theme = useTheme();

  return (
    <footer
      id="contact"
      data-theme={theme === "dark" ? "light" : "dark"}
      className="bg-bg px-5 pt-[var(--sc-section)] text-ink md:px-10"
    >
      <div className="grid gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div data-sc-in data-sc-stagger="70">
          <h2 className="text-[length:var(--sc-t-2xl)] font-bold leading-[1.06] tracking-[-0.03em]">
            Get in touch
          </h2>
          <p className="mt-5 max-w-[44ch] text-[length:var(--sc-t-base)] leading-[1.6] text-muted">
            I am open to developer roles and freelance projects. A message here reaches me
            directly, or ask the AI version of me in the corner.
          </p>
          <ul className="mt-8 flex flex-col items-start gap-4">
            <li>
              <a href="mailto:davidtuisaulaauvaa@gmail.com" className={LINK}>
                davidtuisaulaauvaa@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/david-tuisaula-5655bb3b5" className={LINK}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/King5ula" className={LINK}>
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>

      <div className="mt-[clamp(3rem,7vw,6rem)] flex flex-wrap justify-between gap-2 border-t border-line py-6 text-muted">
        <span className="mono-label">David Tuisaula / Full stack developer</span>
        <span className="mono-label">2026 / Aotearoa</span>
      </div>
    </footer>
  );
}
