import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/config/portfolio.config";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeader title="experience" />

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            data-testid={`experience-entry-${index}`}
          >
            {/* Company Logo */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_hsl(var(--background))] relative z-10 overflow-hidden p-1.5 ${exp.logoBg}`}
            >
              <img src={exp.logo} alt={exp.logoAlt} className="w-full h-full object-contain" />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors overflow-hidden">
              {exp.photo && exp.bullets.length === 0 && (
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={exp.photo}
                    alt={`${exp.company} visual`}
                    className="w-full h-full object-cover object-center opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col space-y-1 mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                  <div className="font-mono text-sm text-primary">{exp.company}</div>
                  <div className="font-mono text-xs text-muted-foreground flex items-center justify-between mt-1">
                    <span>{exp.dates}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.bullets.length > 0 && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary/50 shrink-0 mt-0.5">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
