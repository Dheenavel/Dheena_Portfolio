import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Code } from "lucide-react";

const projects = [
  {
    name: "Competitive Analysis Agent",
    description: "Automates market research and competitive insight generation.",
    tags: ["Lovable", "n8n", "Gemini"],
    link: "#"
  },
  {
    name: "DocWriter Assistant",
    description: "MCP server that scrapes web data and collaboratively edits documents via conversation.",
    tags: ["Claude Sonnet 3.7", "MCP"],
    link: "#"
  },
  {
    name: "Reflect.ai",
    description: "Full-stack app analyzing user reflections through conversational UI.",
    tags: ["Lovable", "Supabase"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="ai_projects" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors group"
          >
            {/* Mac-style terminal header */}
            <div className="h-8 border-b border-border bg-muted/30 px-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 font-mono text-[10px] text-muted-foreground opacity-50">bash</span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-mono font-medium text-lg mb-2 text-foreground flex items-center gap-2">
                <Code size={16} className="text-primary" />
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[10px] tracking-wide px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
