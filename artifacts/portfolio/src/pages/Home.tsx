import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Speaking } from "@/components/sections/Speaking";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30">
      <Nav />
      <main className="flex-1">
        <Hero />
        
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
          <About />
          <hr className="border-border/50" />
          <Experience />
          <hr className="border-border/50" />
          <Projects />
          <hr className="border-border/50" />
          <Writing />
          <hr className="border-border/50" />
          <Speaking />
          <hr className="border-border/50" />
          <Skills />
          <hr className="border-border/50" />
          <Education />
          <hr className="border-border/50" />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
