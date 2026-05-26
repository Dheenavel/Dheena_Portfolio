import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, ArrowRight, MapPin, Calendar } from "lucide-react";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-24">
      <SectionHeader title="speaking" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border bg-card overflow-hidden group"
      >
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
              <Mic size={16} />
              <span>Keynote Presentation</span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground">
              Product Operating Model for the AI Era
            </h3>
            
            <p className="text-muted-foreground">
              Keynote presented to 100+ product leaders on moving to a new operating model for the AI era. 
              Discussed the shift from traditional agile cadences to AI-assisted rapid prototyping and delivery.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <MapPin size={14} /> Product Coffee, Atlanta, GA
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Calendar size={14} /> Dec 2025
              </div>
            </div>
          </div>
          
          <div className="md:w-48 shrink-0 flex items-center justify-start md:justify-end">
            <a 
              href="#"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium hover:bg-secondary/80 transition-colors text-sm"
            >
              Watch Recording <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
