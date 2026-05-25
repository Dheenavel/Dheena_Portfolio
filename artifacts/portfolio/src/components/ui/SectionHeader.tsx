import { motion } from "framer-motion";

export function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-8 font-mono text-sm tracking-wider text-muted-foreground flex items-center gap-2"
    >
      <span className="text-primary">{'//'}</span> {title.toUpperCase()}
    </motion.div>
  );
}
