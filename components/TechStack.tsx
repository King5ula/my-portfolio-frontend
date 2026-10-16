"use client";

import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { Quake } from "@/components/Quake";
import { TECH_GROUPS } from "@/lib/tech-stack";

const SEP = " / ";
const ROW_CHARS = 46; // a row longer than this splits, so no row sets tiny

interface Row {
  label?: string;
  text: string;
}

// Groups become rows of roughly equal length; a long group takes two.
function buildRows(): Row[] {
  const rows: Row[] = [];
  for (const group of TECH_GROUPS) {
    const names = group.items.map((item) => item.name);
    const total = names.join(SEP).length;
    const parts = Math.max(1, Math.round(total / ROW_CHARS));
    const per = Math.ceil(names.length / parts);
    for (let i = 0; i < names.length; i += per) {
      rows.push({ label: i === 0 ? group.label : undefined, text: names.slice(i, i + per).join(SEP) });
    }
  }
  return rows;
}

const ROWS = buildRows();

// Sizes every row to run edge to edge, then shrinks the whole wall uniformly
// if it would overflow the stage. Desktop only: phones let rows wrap.
function useFitWall(wall: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = wall.current;
    if (!el) return;
    const wide = matchMedia("(min-width: 768px)");

    const fit = () => {
      const rows = Array.from(el.querySelectorAll<HTMLElement>(".wall-type"));
      if (!wide.matches) {
        rows.forEach((row) => (row.style.fontSize = ""));
        return;
      }
      rows.forEach((row) => (row.style.fontSize = "100px"));
      const sizes = rows.map((row) => (100 * row.clientWidth) / Math.max(row.scrollWidth, 1));
      rows.forEach((row, i) => (row.style.fontSize = `${sizes[i]}px`));
      // Sum the rows rather than reading scrollHeight: a centred flex column
      // overflows upward too, and scrollHeight never counts that part.
      const used = Array.from(el.children).reduce((sum, row) => sum + (row as HTMLElement).offsetHeight, 0);
      const shrink = Math.min(1, el.clientHeight / Math.max(used, 1));
      if (shrink < 1) rows.forEach((row, i) => (row.style.fontSize = `${sizes[i] * shrink}px`));
    };

    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    wide.addEventListener("change", fit);
    return () => {
      ro.disconnect();
      wide.removeEventListener("change", fit);
    };
  }, [wall]);
}

// Act 4, the peak. A near-empty pinned screen with one small line (authored
// silence), then the stack lands row by row until the screen is a wall.
export function TechStack() {
  const wall = useRef<HTMLDivElement>(null);
  useFitWall(wall);
  const first = 0.16;
  const step = 0.5 / ROWS.length;

  return (
    <section id="stack" data-sc-act="pin" data-sc-span="3.4">
      <div data-sc-stage className="flex flex-col px-5 py-[clamp(1.5rem,5vh,3rem)] md:px-10">
        <h2 data-sc-cue="0 0.24 0" className="text-[length:var(--sc-t-lg)] font-semibold tracking-[-0.01em]">
          Here is what I build with.
        </h2>

        <div ref={wall} className="mt-[clamp(1rem,3vh,2rem)] flex min-h-0 flex-1 flex-col justify-center overflow-hidden">
          {ROWS.map((row, i) => (
            <div
              key={row.text}
              className="wall-row grid items-baseline gap-3 md:grid-cols-[7.5rem_minmax(0,1fr)]"
              style={{ "--s": (first + i * step).toFixed(3) } as CSSProperties}
            >
              <span className="mono-label hidden text-muted md:block">{row.label}</span>
              <Quake text={row.text} className="wall-type block text-[clamp(1.5rem,6.6vw,3rem)]" />
            </div>
          ))}
        </div>

        <p data-sc-cue="0.7 1 0.25 0" className="mono-label mt-4 text-muted">
          Every one used on a real brief
        </p>
      </div>
    </section>
  );
}
