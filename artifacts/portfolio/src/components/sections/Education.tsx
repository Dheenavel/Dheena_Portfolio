import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/config/portfolio.config";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader title="education" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors"
            data-testid={`education-entry-${index}`}
          >
            <div className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden p-1.5 ${edu.logoBg}`}>
              <img src={edu.logo} alt={edu.logoAlt} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-1">{edu.degree}</h3>
            <p className="font-mono text-sm text-primary mb-4">{edu.school}</p>
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>{edu.date}</span>
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
