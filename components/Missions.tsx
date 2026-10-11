import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { MISSIONS, type Mission } from "@/lib/missions";

function MissionCard({ mission }: { mission: Mission }) {
  return (
    <article className="group flex flex-col rounded-[28px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-accent">
          {mission.label}
        </span>
        <a
          href={mission.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${mission.title} on GitHub`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          ↗
        </a>
      </div>

      <h3 className="mt-6 text-[1.35rem] font-bold leading-[1.25] tracking-[-0.01em]">
        {mission.title}
      </h3>
      <p className="mt-1 font-mono text-[0.8rem] text-accent">{mission.role}</p>
      <p className="mt-4 leading-[1.6] text-muted">{mission.summary}</p>

      <ul className="mt-4 space-y-2 text-[0.95rem] leading-[1.5]">
        {mission.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="text-accent">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {mission.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Missions() {
  return (
    <section id="missions" className="py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading
          number="02"
          label="Missions"
          title={
            <>
              Four missions. <span className="text-accent">Real briefs, shipped.</span>
            </>
          }
        >
          <p>
            Each mission was a client-style brief from my diploma, built solo or in a team. The
            arrow on each card opens the code on GitHub.
          </p>
        </SectionHeading>

        <div className="grid gap-8 bento:grid-cols-2">
          {MISSIONS.map((mission) => (
            <MissionCard key={mission.title} mission={mission} />
          ))}
        </div>
      </div>

      <div id="projects" className="mt-20">
        <div className="flex flex-col items-center justify-center gap-4 px-5 pb-5 text-center md:px-10">
          <h3 className="text-[2rem] font-bold">Working on</h3>
          <p className="mt-1 text-muted">
            A full-stack application built from scratch, currently in development.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}
