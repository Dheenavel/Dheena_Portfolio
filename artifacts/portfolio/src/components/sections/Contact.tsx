import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-12">
      <SectionHeader title="contact" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Let's connect</h2>
        <p className="text-muted-foreground mb-8">
          Always open to discussing AI, product management, or new opportunities. 
          Feel free to reach out directly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:dheenavel@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail size={18} /> dheenavel@gmail.com
          </a>
          <a 
            href="https://linkedin.com/in/dheenadayalan-kathirvel/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground border border-border/50 px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
          >
            <FaLinkedin size={18} /> LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
