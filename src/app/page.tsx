import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AIAgentPlayground } from "@/components/AIAgentPlayground";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite-100 text-slate-900 selection:bg-sky-500/20 selection:text-sky-900 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AIAgentPlayground />
        <Timeline />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
