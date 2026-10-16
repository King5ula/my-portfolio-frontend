import { ChatWidget } from "@/components/ChatWidget";
import { ContactFooter } from "@/components/ContactFooter";
import { CurrentProject } from "@/components/CurrentProject";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { ScrollCraftRoot } from "@/components/ScrollCraftRoot";
import { TechStack } from "@/components/TechStack";
import { ThemeShell } from "@/components/ThemeShell";

// A typographic poster in five acts: impact, respect, trust, the stack wall
// (the peak), resolve. The plan behind it is scrollcraft/builds/portfolio/BRIEF.md.
export default function HomePage() {
  return (
    <ThemeShell>
      <div className="sc-grain" aria-hidden="true" />
      <ScrollCraftRoot>
        <Hero />
        <Missions />
        <CurrentProject />
        <TechStack />
        <ContactFooter />
      </ScrollCraftRoot>
      <ChatWidget />
    </ThemeShell>
  );
}
