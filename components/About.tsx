import { SectionHeading } from "@/components/SectionHeading";

const STATS = [
  { value: "04", caption: "Mission projects on GitHub" },
  { value: "03", caption: "AI services integrated: Rekognition, Claude, OpenRouter" },
  { value: "05", caption: "Months of full-time building" },
];

const PRINCIPLES = [
  {
    glyph: "</>",
    title: "Tests before features",
    body: "The insurance APIs were written test-first with Jest and Supertest, so the business rules are proven, not assumed.",
  },
  {
    glyph: "AI",
    title: "AI with guardrails",
    body: "From vehicle recognition to chat consultants, I keep the business rules explicit and check them in tests.",
  },
  {
    glyph: "↗",
    title: "Business first",
    body: "Years in real estate and telecommunications taught me to start from the customer's problem, then pick the tech.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-5 py-[60px] md:px-10 md:py-[100px]">
      <SectionHeading
        number="01"
        label="About"
        title={
          <>
            A developer who starts with the <span className="text-accent">business problem.</span>
          </>
        }
      >
        <p>
          I&apos;m David. I spent several years in residential and commercial real estate, 
          building CRM systems and keeping listings and customer data
          in sync, before taking time out as a stay-at-home dad.
        </p>
        <p className="mt-4">
          I moved into software because I wanted to build those tools properly. The missions
          below are from my diploma in advanced AI-powered full-stack development: each one a real
          brief, a chosen stack and something specific I learned.
        </p>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.caption} className="rounded-2xl border border-line bg-surface p-6">
            <div className="text-[2.2rem] font-extrabold leading-none text-accent">
              {stat.value}
            </div>
            <p className="mt-3 text-[0.9rem] text-muted">{stat.caption}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <div key={principle.title}>
            <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-[10px] border border-line bg-surface px-2 font-mono text-[0.8rem] font-bold text-accent">
              {principle.glyph}
            </div>
            <h3 className="mt-4 text-[1.1rem] font-bold">{principle.title}</h3>
            <p className="mt-2 leading-[1.6] text-muted">{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
