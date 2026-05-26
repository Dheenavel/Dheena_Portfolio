import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, Play, MapPin, Calendar } from "lucide-react";
import { speaking } from "@/config/portfolio.config";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-24">
      <SectionHeader title="speaking" />

      <div className="space-y-6">
        {speaking.map((talk, index) => (
          <motion.a
            key={index}
            href={talk.videoUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="block rounded-lg border border-border bg-card overflow-hidden group hover:border-primary/50 transition-colors"
            data-testid={`speaking-talk-${index}`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <div className="md:w-96 shrink-0 overflow-hidden bg-muted">
                <img
                  src={talk.thumbnail}
                  alt={`${talk.title} — ${talk.event}`}
                  className="w-full h-full object-cover aspect-video md:aspect-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <Mic size={16} />
                  <span>{talk.type}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {talk.title}
                </h3>

                <p className="text-muted-foreground">{talk.description}</p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <MapPin size={14} /> {talk.event}, {talk.location}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Calendar size={14} /> {talk.date}
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
        ))}
      </div>
    </section>
  );
}
