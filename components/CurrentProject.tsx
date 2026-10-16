"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Quake } from "@/components/Quake";

const STACK = ["Django 6", "Django Ninja", "Supabase Postgres", "Supabase Auth", "Next.js 16", "TypeScript"];

// The recording opens on the phone's home screen and a saved-password sheet,
// and ends back at the login page, so only the portal itself is looped.
const CLIP_START = 8.5;
const CLIP_END = 57.5;

// Plays the phone recording only while it is on screen. Under reduced motion
// it never autoplays; the poster and native controls are there instead.
function PhoneRecording() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const keepInRange = () => {
      if (video.currentTime < CLIP_START || video.currentTime >= CLIP_END) {
        video.currentTime = CLIP_START;
      }
    };
    video.addEventListener("timeupdate", keepInRange);
    video.addEventListener("ended", keepInRange);

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.controls = reduce;
    const io = reduce
      ? null
      : new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              keepInRange();
              video.play().catch(() => {});
            } else video.pause();
          },
          { threshold: 0.3 },
        );
    io?.observe(video);
    return () => {
      io?.disconnect();
      video.removeEventListener("timeupdate", keepInRange);
      video.removeEventListener("ended", keepInRange);
    };
  }, []);

  return (
    <video
      ref={ref}
      src="/techWorkFlow.mp4"
      poster="/scrollcraft/portfolio/phone-poster.webp"
      muted
      playsInline
      preload="none"
      aria-label="Screen recording of the technician app on a phone: starting a shift, logging a call-out at a site, and submitting the log"
      className="block h-full w-full object-cover"
    />
  );
}

// Act 3, Trust. The quiet act before the peak: a raised ground, plain prose,
// the real app on a real phone.
export function CurrentProject() {
  return (
    <section id="now" className="bg-surface px-5 py-[var(--sc-section)] md:px-10">
      <div className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div data-sc-in data-sc-stagger="70">
          <p className="mono-label text-accent">Now building</p>
          <Quake
            as="h2"
            text="Pacific Generators"
            className="poster-title mt-5 block text-[clamp(2.6rem,6.4vw,6rem)]"
          />
          <p className="mt-6 max-w-[56ch] text-[length:var(--sc-t-lg)] leading-[1.55]">
            The internal system for an Auckland generator company: customers, sites, generators,
            service jobs, and parts and stock, in one place instead of a stack of spreadsheets.
          </p>
          <p className="mt-4 max-w-[56ch] leading-[1.65] text-muted">
            The first version ran on MySQL, with a phone app for technicians and an admin dashboard
            for the office. I am rebuilding it on Postgres, with Django owning the schema and the
            browser never calling the API directly. An importer reads the office&apos;s existing
            sheets, does a dry run, and reports exactly what it will save before it saves anything.
          </p>
          <p className="mono-label mt-8 text-muted">{STACK.join("  /  ")}</p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] pb-[18%]" data-sc-in>
          <figure className="relative z-[1] ml-auto mr-[8%] aspect-[1080/2340] h-[min(68vh,40rem)] overflow-hidden rounded-[2.2rem] border-[6px] border-[var(--sc-canvas)] bg-black shadow-[0_24px_48px_-12px_hsl(40_10%_2%/0.55)]">
            <PhoneRecording />
          </figure>
          <figure className="absolute bottom-0 left-0 w-[78%] overflow-hidden rounded-[var(--sc-r-md)] border border-line shadow-[0_16px_32px_-10px_hsl(40_10%_2%/0.45)]">
            <Image
              src="/dashboard.png"
              alt="The first version's admin dashboard: a field operations directory of technicians, each with a view analytics link"
              width={1535}
              height={688}
              className="h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
