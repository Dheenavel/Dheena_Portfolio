import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, Play, MapPin, Calendar } from "lucide-react";

const YOUTUBE_URL = "https://www.youtube.com/live/itHp7_GQLaY";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-24">
      <SectionHeader title="speaking" />

      <motion.a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block rounded-lg border border-border bg-card overflow-hidden group hover:border-primary/50 transition-colors"
        data-testid="speaking-keynote"
      >
        <div className="flex flex-col md:flex-row">
          {/* Thumbnail */}
          <div className="relative md:w-96 shrink-0 overflow-hidden bg-muted">
            <img
              src="/photos/keynote-thumbnail.jpg"
              alt="Product Operating Model for the AI Era — keynote at Product Coffee Atlanta"
              className="w-full h-full object-cover aspect-video md:aspect-auto group-hover:scale-105 transition-transform duration-500"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={22} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
              <Mic size={16} />
              <span>Keynote Presentation</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
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

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-sm font-mono text-primary group-hover:gap-3 transition-all">
                Watch on YouTube <Play size={13} fill="currentColor" />
              </span>
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  );
}
