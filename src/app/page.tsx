import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-cyan/30">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
