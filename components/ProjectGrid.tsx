import Image from "next/image";

const CARD =
  "overflow-hidden rounded-[28px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-muted bento:h-[520px] bento:p-8";
const TAG = "text-xs font-semibold uppercase tracking-wider text-accent";
const TITLE = "mt-2 text-xl font-bold";
const DESCRIPTION = "mt-3 leading-relaxed text-muted";

export function ProjectGrid() {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 p-5 bento:grid-cols-2 bento:p-10">
      {/* Left card: text beside the workflow video */}
      <div className={`${CARD} flex flex-col items-center gap-6 bento:flex-row`}>
        <div className="flex w-full flex-col bento:w-[55%]">
          <span className={TAG}>Featured Project</span>
          <h3 className={TITLE}>Field Service Management Software</h3>
          <p className={DESCRIPTION}>
            Engineered a full-stack Field Service platform managing repair workflows for an
            Auckland-based generator company. Originally built with MySQL; currently migrating
            to Supabase to leverage a PostgreSQL database architecture and real-time state
            synchronization.
          </p>
        </div>

        <div className="h-[350px] w-full overflow-hidden rounded-2xl border border-line bg-black bento:h-full bento:w-[45%]">
          <video
            src="/techWorkFlow.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Right card: text above a screenshot that scrolls on hover */}
      <div className={`${CARD} group flex flex-col justify-between gap-6`}>
        <div className="w-full">
          <span className={TAG}>Interactive Preview</span>
          <h3 className={TITLE}>Admin Dashboard Management</h3>
          <p className={DESCRIPTION}>
            A comprehensive overview of the administrative command module interface. This
            control panel aggregates live task dispatches, service request tracking telemetry,
            and real-time client pipeline statuses.
          </p>
        </div>

        <div className="h-[240px] w-full overflow-hidden rounded-2xl border border-line bg-[#101012]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/dashboard.png"
              alt="Admin UI Panel Blueprint"
              width={1535}
              height={688}
              className="absolute left-0 top-0 h-auto w-full transition-transform duration-[4000ms] ease-in-out group-hover:translate-y-[calc(-100%+240px)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
