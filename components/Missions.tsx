import { Quake } from "@/components/Quake";
import { MISSIONS, type Mission } from "@/lib/missions";

// Each row is its own flow act, so its title wipe runs off that row's own
// visibility rather than the whole section's.
function MissionRow({ mission }: { mission: Mission }) {
  return (
    <article
      data-sc-act="flow"
      className="grid gap-x-10 gap-y-6 border-t border-line py-[clamp(2.5rem,6vw,4.5rem)] md:grid-cols-[13rem_1fr]"
    >
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 md:flex-col">
        <span className="mono-label text-accent">{mission.label}</span>
        <span className="mono-label text-muted">{mission.role}</span>
      </div>

      <div>
        <div data-sc-reveal="left" data-sc-reveal-at="0.04 0.32" className="pb-[0.08em]">
          <Quake
            as="h3"
            text={mission.title}
            className="poster-title text-[clamp(2.1rem,5.4vw,5rem)]"
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <p className="max-w-[62ch] text-[length:var(--sc-t-lg)] leading-[1.5]">{mission.summary}</p>
          <ul className="space-y-3 text-[length:var(--sc-t-sm)] leading-[1.6] text-muted">
            {mission.highlights.map((highlight) => (
              <li key={highlight} className="border-l border-line pl-4">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="mono-label text-muted">{mission.tags.join("  /  ")}</p>
          <a
            href={mission.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-[0.95rem] font-semibold underline decoration-line decoration-2 underline-offset-[0.35em] transition-colors duration-150 hover:decoration-accent"
          >
            Code on GitHub<span className="sr-only">: {mission.title}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// Act 2, Respect. Calm reading, with each title's wipe as the intense beat.
export function Missions() {
  return (
    <section id="missions" className="px-5 pb-[var(--sc-section)] pt-[clamp(3rem,8vw,7rem)] md:px-10">
      <div data-sc-in data-sc-stagger="70" className="mb-[clamp(2.5rem,6vw,5rem)] max-w-[60rem]">
        <Quake
          as="h2"
          text="Four missions. Real briefs."
          className="poster-title block text-[clamp(2.6rem,7vw,6.5rem)]"
        />
        <p className="mt-6 max-w-[56ch] text-[length:var(--sc-t-lg)] leading-[1.55] text-muted">
          I spent years in real estate and telecommunications, building CRM systems and keeping
          customer data in sync, before moving into software to build those tools properly. These
          are the client-style briefs from my diploma, solo and in teams.
        </p>
      </div>

      {MISSIONS.map((mission) => (
        <MissionRow key={mission.title} mission={mission} />
      ))}
    </section>
  );
}
