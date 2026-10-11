import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

const LINK =
  "border-b-2 border-line pb-1 font-semibold text-ink transition-colors duration-200 hover:border-accent";

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-[60px] md:px-10 md:py-[100px]">
        <SectionHeading
          number="04"
          label="Contact"
          title={
            <>
              Let&apos;s <span className="text-accent">collaborate.</span>
            </>
          }
        >
          <p>I am currently open to junior developer roles and freelance projects.</p>
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start gap-5">
            <a href="https://www.linkedin.com/in/david-tuisaula-5655bb3b5" className={LINK}>
              LinkedIn
            </a>
            <a href="https://github.com/King5ula" className={LINK}>
              GitHub
            </a>
            <a href="mailto:davidtuisaulaauvaa@gmail.com" className={LINK}>
              Email Me
            </a>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-2 border-t border-line px-5 py-6 font-mono text-[0.75rem] uppercase tracking-[0.15em] text-muted md:px-10">
        <span>David Tuisaula · Full Stack Developer</span>
        <span>© 2026 · Aotearoa</span>
      </div>
    </footer>
  );
}
