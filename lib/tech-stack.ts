export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "cloud"
  | "testing"
  | "collaboration";
export type TechTab = "all" | TechCategory;

export interface TechItem {
  name: string;
  // Path under public/. Items without a logo render as text only.
  icon?: string;
}

export interface TechGroup {
  category: TechCategory;
  // Shown as the group heading and the tab text.
  label: string;
  items: TechItem[];
}

const icon = (name: string) => `/icons/${name}.svg`;

export const TECH_GROUPS: TechGroup[] = [
  {
    category: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML", icon: icon("html5") },
      { name: "CSS", icon: icon("css3") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "React", icon: icon("react") },
      { name: "Next.js", icon: icon("nextjs") },
      { name: "Tailwind CSS", icon: icon("tailwindcss") },
      { name: "Vite", icon: icon("vite") },
      { name: "Zod", icon: icon("zod") },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: icon("nodejs") },
      { name: "Express", icon: icon("express") },
      { name: "Python", icon: icon("python") },
      { name: "FastAPI", icon: icon("fastapi") },
      { name: "Pydantic", icon: icon("pydantic") },
      { name: "REST APIs" },
      { name: "WebSockets" },
    ],
  },
  {
    category: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "Supabase", icon: icon("supabase") },
      { name: "pgvector" },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "Mongoose", icon: icon("mongoose") },
      { name: "MySQL", icon: icon("mysql") },
    ],
  },
  {
    category: "ai",
    label: "AI",
    items: [
      { name: "Anthropic Claude API", icon: icon("anthropic") },
      { name: "OpenAI API" },
      { name: "OpenRouter", icon: icon("openrouter") },
      { name: "RAG" },
      { name: "Voyage AI Embeddings" },
      { name: "Model Context Protocol", icon: icon("mcp") },
      { name: "AWS Rekognition", icon: icon("aws") },
      { name: "Prompt Engineering" },
    ],
  },
  {
    category: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: icon("aws") },
      { name: "Microsoft Azure", icon: icon("azure") },
      { name: "Vercel", icon: icon("vercel") },
      { name: "Render", icon: icon("render") },
      { name: "Docker", icon: icon("docker") },
      { name: "GitHub Actions", icon: icon("githubactions") },
    ],
  },
  {
    category: "testing",
    label: "Testing",
    items: [
      { name: "Jest", icon: icon("jest") },
      { name: "Supertest" },
      { name: "Vitest", icon: icon("vitest") },
      { name: "Pytest", icon: icon("pytest") },
    ],
  },
  {
    category: "collaboration",
    label: "Collaboration",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "Jira", icon: icon("jira") },
      { name: "Trello", icon: icon("trello") },
      { name: "Slack", icon: icon("slack") },
      { name: "Miro", icon: icon("miro") },
    ],
  },
];

export const TECH_TABS: { tab: TechTab; label: string }[] = [
  { tab: "all", label: "All" },
  ...TECH_GROUPS.map((group) => ({ tab: group.category, label: group.label })),
];

export function groupsForTab(tab: TechTab): TechGroup[] {
  return tab === "all" ? TECH_GROUPS : TECH_GROUPS.filter((group) => group.category === tab);
}
