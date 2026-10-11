import type { ReactNode } from "react";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: ReactNode;
  // Shown beside the title on wide screens, below it on narrow ones.
  children?: ReactNode;
}

export function SectionHeading({ number, label, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:gap-16">
      <div>
        <span className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-accent">
          {`// ${number} · ${label}`}
        </span>
        <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
          {title}
        </h2>
      </div>
      {children && (
        <div className="self-end text-[1.05rem] leading-[1.6] text-muted">{children}</div>
      )}
    </div>
  );
}
