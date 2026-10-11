import { About } from "@/components/About";
import { ChatWidget } from "@/components/ChatWidget";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { TechStack } from "@/components/TechStack";
import { ThemeShell } from "@/components/ThemeShell";

export default function HomePage() {
  return (
    <ThemeShell>
      <Hero />
      <About />
      <Missions />
      <TechStack />
      <ContactFooter />
      <ChatWidget />
    </ThemeShell>
  );
}
