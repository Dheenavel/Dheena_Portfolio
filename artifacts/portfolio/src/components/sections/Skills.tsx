import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/config/portfolio.config";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader title="skills_and_stack" />

      <div className="space-y-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-start gap-4"
          >
            <h3 className="font-mono text-sm text-foreground md:w-36 shrink-0 md:pt-1">
              {category.title}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className={`font-mono text-xs px-2.5 py-1 rounded-sm border ${category.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
