import { Quake } from "@/components/Quake";

// Real figures from the internship MVP's backend and frontend repos, main
// branch (Aug 23 to Oct 9 2026): 28 distinct agent functions in app/agents,
// each its own structured model call; 246 backend + 14 frontend tests. The
// product and company stay unnamed by agreement.
const PROOF = [
  { value: "28", label: "Distinct AI agents" },
  { value: "260", label: "Automated tests" },
  { value: "7", label: "Weeks, first commit to MVP" },
];

// Act 1, Impact. Pinned: the name is the ground the whole time, and three
// beats cross over beneath it. The first greets, so the landing view is full.
export function Hero() {
  return (
    <section id="top" data-sc-act="pin" data-sc-span="2.3" data-sc-dwell="0.2">
      <div data-sc-stage className="flex flex-col justify-between">
        <h1 className="hero-name px-5 pt-[clamp(5rem,13vh,8rem)] md:px-10">
          <Quake text="DAVID" className="poster-name block" />
          <Quake text="TUISAULA" className="poster-name block" />
          <span className="sr-only">, full stack developer</span>
        </h1>

        <div className="relative px-5 pb-[clamp(2.5rem,9vh,6rem)] md:px-10">
          <div data-sc-cue="0 0.34 0" className="max-w-[40rem]">
            <p className="text-[length:var(--sc-t-xl)] font-semibold leading-[1.15] tracking-[-0.02em]">
              Full stack developer.
            </p>
            <p className="mt-3 max-w-[34rem] text-[length:var(--sc-t-base)] leading-[1.6] text-muted">
              Diploma finished, internship delivered, and building for a real client right now.
            </p>
          </div>

          <p
            data-sc-cue="0.28 0.66"
            data-sc-kinetic="lines"
            className="absolute bottom-[clamp(2.5rem,9vh,6rem)] left-5 right-5 max-w-[52rem] text-[length:var(--sc-t-2xl)] font-bold leading-[1.06] tracking-[-0.03em] md:left-10"
          >
            I led the technical build of a live AI product: the system design, the data pipeline
            and the agent orchestration.
          </p>

          <dl
            data-sc-cue="0.6 1 0.3 0"
            className="absolute bottom-[clamp(2.5rem,9vh,6rem)] left-5 right-5 grid max-w-[60rem] grid-cols-3 gap-6 md:left-10"
          >
            {PROOF.map((item, i) => (
              // dt first for a valid list; column-reverse puts the number on top.
              <div key={item.label} className="flex flex-col-reverse border-t border-line pt-4">
                <dt className="mono-label mt-3 text-muted">{item.label}</dt>
                <dd className="poster-title text-[clamp(3rem,9vw,8rem)] text-ink">
                  <span
                    className="sc-nums"
                    data-sc-count={`0 ${item.value}`}
                    data-sc-count-at={`${0.62 + i * 0.04} 0.86`}
                  >
                    {item.value}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
