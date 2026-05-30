import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/config/portfolio.config";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="featured_work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors group"
          >
            {/* Terminal header bar */}
            <div className="h-8 border-b border-border bg-muted/30 px-3 flex items-center gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              {project.link !== "#" && (
                <span className="ml-2 font-mono text-[10px] text-muted-foreground opacity-50">live</span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-mono font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wide px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={13} />
                    View <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
