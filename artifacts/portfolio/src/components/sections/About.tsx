import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/config/portfolio.config";

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
        {personal.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <div className="mt-8 p-4 bg-muted/50 border border-border rounded-md inline-block">
          <p className="m-0 font-mono text-sm text-foreground flex items-center gap-2">
            <span className="text-primary">{">"}</span> {personal.quote}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
