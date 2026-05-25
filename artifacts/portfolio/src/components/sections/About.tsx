import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader title="about" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground"
      >
        <p>
          I'm an AI Product Manager with over 5 years of experience building and shipping AI-powered products. 
          I don't just write strategy documents; I'm hands-on with LLMs, RAG pipelines, MCP servers, and agentic workflows.
        </p>
        <p>
          My focus is on creating tangible business value. Recently, I've driven $2M+ in cost savings and reduced 
          call center volume by 30% through targeted GenAI deployments. I'm a passionate learner who constantly consumes 
          insights on business, tech, and AI—and shares those learnings on my Substack.
        </p>
        
        <div className="mt-8 p-4 bg-muted/50 border border-border rounded-md inline-block">
          <p className="m-0 font-mono text-sm text-foreground flex items-center gap-2">
            <span className="text-primary">{">"}</span> I believe the best PMs are builders first.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
