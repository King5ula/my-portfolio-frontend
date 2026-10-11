const HERO_BUTTON =
  "rounded-[30px] px-7 py-3.5 text-center text-base font-semibold transition-all duration-[250ms] hover:-translate-y-0.5";
const OUTLINE_BUTTON = `${HERO_BUTTON} border border-line text-ink hover:border-ink hover:bg-surface`;

// Each line starts hidden and lifts in; the delays stagger them.
const POP_UP = "opacity-0 animate-text-pop-up";

export function Hero() {
  return (
    <header className="relative mx-auto flex min-h-[90vh] max-w-[1100px] flex-col items-center justify-center px-5 pb-10 pt-[60px] text-center md:px-10 md:py-0">
      <span
        className={`${POP_UP} mb-5 font-mono text-base tracking-[0.05em] text-accent [animation-delay:0.1s]`}
      >
        {"// welcome to my space"}
      </span>

      <h1
        className={`${POP_UP} max-w-[900px] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] [animation-delay:0.25s]`}
      >
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-ink to-accent bg-clip-text text-transparent">
          David Tuisaula
        </span>
        .<span className="mt-2 block font-bold text-muted">A Full Stack Developer.</span>
      </h1>

      <p
        className={`${POP_UP} mt-8 max-w-[650px] text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.6] text-muted [animation-delay:0.4s]`}
      >
        From building relationships to building clean, functional digital products. I close
        the gap between complex ideas and scalable software—one application at a time.
      </p>

      <div
        className={`${POP_UP} mt-10 flex w-full max-w-[280px] flex-col gap-4 [animation-delay:0.55s] sm:w-auto sm:max-w-none sm:flex-row`}
      >
        <a href="#missions" className={`${HERO_BUTTON} bg-ink text-bg hover:opacity-95`}>
          Explore the missions
        </a>
        <a href="#skills" className={OUTLINE_BUTTON}>
          Tech Stack
        </a>
        <a href="#contact" className={OUTLINE_BUTTON}>
          Let&apos;s Talk
        </a>
      </div>

      <div className="absolute bottom-10 hidden flex-col items-center gap-2 sm:flex">
        <span className="text-[0.8rem] font-medium uppercase tracking-[0.15em] text-muted">
          Scroll to explore
        </span>
        <div className="animate-scroll-bounce text-[1.2rem] text-muted">↓</div>
      </div>
    </header>
  );
}
