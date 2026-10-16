"use client";

import { useEffect, useRef, type ElementType } from "react";

// The page's signature move. Moving the mouse (or tapping, on touch) sends a
// seismic ring out from the pointer. Every Quake glyph the ring passes lifts
// and leans slightly away from the epicentre, then settles, so the type rolls
// like a wave rather than shaking. One shared rAF loop drives every Quake on
// the page and stops as soon as the last ring dies.

interface Ring {
  x: number;
  y: number;
  t0: number;
  amp: number;
}

type Glyph = HTMLElement & { __dy?: number };

const SPEED = 1100; // wavefront travel, px/s
const WIDTH = 120; // wavefront thickness, px
const LIFE = 1.5; // seconds before a ring is dropped
const STEP = 36; // pointer travel between rings, px
const MAX_RINGS = 10;

const active = new Set<HTMLElement>();
const rings: Ring[] = [];
let frame = 0;
let users = 0;
let last = { x: NaN, y: NaN, t: 0 };

function spawn(x: number, y: number, amp: number) {
  rings.push({ x, y, t0: performance.now(), amp });
  if (rings.length > MAX_RINGS) rings.shift();
  if (!frame) frame = requestAnimationFrame(tick);
}

function onMove(e: PointerEvent) {
  if (e.pointerType !== "mouse") return;
  const now = performance.now();
  const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
  if (!(dist >= STEP)) {
    if (Number.isNaN(last.x)) last = { x: e.clientX, y: e.clientY, t: now };
    return;
  }
  // Faster sweeps make bigger waves, within a gentle cap.
  const speed = dist / Math.max(now - last.t, 8);
  spawn(e.clientX, e.clientY, Math.min(0.35 + speed * 0.3, 0.8));
  last = { x: e.clientX, y: e.clientY, t: now };
}

function onDown(e: PointerEvent) {
  spawn(e.clientX, e.clientY, 1);
}

function tick(now: number) {
  frame = 0;
  while (rings.length && (now - rings[0].t0) / 1000 > LIFE) rings.shift();

  const glyphs: Glyph[] = [];
  active.forEach((el) => {
    el.querySelectorAll<Glyph>(".q-c").forEach((g) => glyphs.push(g));
  });

  // Read every position first, then write, so the frame lays out once.
  const centres = glyphs.map((g) => {
    const r = g.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 - (g.__dy ?? 0) * r.height };
  });

  glyphs.forEach((g, i) => {
    const c = centres[i];
    let dy = 0;
    let rot = 0;
    let grow = 0;
    for (const ring of rings) {
      const t = (now - ring.t0) / 1000;
      const d = Math.hypot(c.x - ring.x, c.y - ring.y);
      const u = (d - SPEED * t) / WIDTH;
      if (u < -2.5 || u > 2.5) continue;
      // One smooth lift as the wavefront passes: no oscillation, no jitter,
      // so it rolls rather than shakes.
      const env = (ring.amp * Math.exp(-t * 3)) / (1 + d / 600);
      const wave = Math.exp(-u * u) * env;
      dy -= wave * 0.1;
      rot += wave * 2.5 * (c.x >= ring.x ? 1 : -1);
      grow += wave * 0.03;
    }
    if (Math.abs(dy) < 0.002 && Math.abs(rot) < 0.05) {
      if (g.__dy) {
        g.style.transform = "";
        g.__dy = 0;
      }
      return;
    }
    g.__dy = dy;
    g.style.transform = `translate3d(0, ${dy.toFixed(3)}em, 0) rotate(${rot.toFixed(2)}deg) scale(${(1 + grow).toFixed(3)})`;
  });

  if (rings.length) frame = requestAnimationFrame(tick);
}

function listen() {
  if (users++ > 0) return;
  addEventListener("pointermove", onMove, { passive: true });
  addEventListener("pointerdown", onDown, { passive: true });
}

function unlisten() {
  if (--users > 0) return;
  removeEventListener("pointermove", onMove);
  removeEventListener("pointerdown", onDown);
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
  rings.length = 0;
}

interface QuakeProps {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
}

// Renders text as quake-able glyphs. Screen readers get the plain string; the
// split glyphs are aria-hidden. Words never break mid-word.
export function Quake({ text, as: Tag = "span", className, id }: QuakeProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    listen();
    // Only glyphs on screen are measured each frame.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) active.add(el);
      else active.delete(el);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      active.delete(el);
      unlisten();
    };
  }, []);

  const words = text.split(" ");
  return (
    <Tag className={className} id={id}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {words.map((word, w) => (
          <span key={w}>
            <span className="q-w">
              {Array.from(word).map((ch, i) => (
                <span key={i} className={ch === "/" ? "q-c q-sep" : "q-c"}>
                  {ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
