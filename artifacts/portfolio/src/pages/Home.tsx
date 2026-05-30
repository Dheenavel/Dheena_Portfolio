import { Fragment } from "react";
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
import { sections } from "@/config/portfolio.config";

// ─────────────────────────────────────────────────────────────
//  Section registry — maps config id → component
//  To add a new section:
//    1. Create src/components/sections/YourSection.tsx
//    2. Import it here and add it to the map below
//    3. Add { id: "your-section", enabled: true } in portfolio.config.ts
// ─────────────────────────────────────────────────────────────
const SECTION_MAP: Record<string, React.ReactNode> = {
  about:      <About />,
  experience: <Experience />,
  projects:   <Projects />,
  writing:    <Writing />,
  speaking:   <Speaking />,
  skills:     <Skills />,
  education:  <Education />,
  contact:    <Contact />,
};

export default function Home() {
  const enabled = sections.filter((s) => s.enabled);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30">
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
          {enabled.map((section, i) => (
            <Fragment key={section.id}>
              {SECTION_MAP[section.id]}
              {i < enabled.length - 1 && <hr className="border-border/50" />}
            </Fragment>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
