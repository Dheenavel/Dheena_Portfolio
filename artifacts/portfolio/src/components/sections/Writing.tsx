import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, BookOpen } from "lucide-react";
import { SiSubstack } from "react-icons/si";

const SUBSTACK_URL = "https://dheenakathirvel31.substack.com/";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24">
      <SectionHeader title="writing" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-2">Thoughts on Building</h2>
          <p className="text-muted-foreground">
            I write about AI, Product Management, and the future of building, on Substack.
          </p>
        </div>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm shrink-0"
          data-testid="writing-substack-link"
        >
          <SiSubstack size={16} />
          Read on Substack <ArrowRight size={16} />
        </a>
      </div>

      {/* TODO: Replace these placeholder cards with real Substack post titles, dates, and URLs */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { tag: "[AI]", title: "[ Add your Substack article title here ]", date: "Coming soon" },
          { tag: "[Product]", title: "[ Add your Substack article title here ]", date: "Coming soon" },
          { tag: "[Strategy]", title: "[ Add your Substack article title here ]", date: "Coming soon" },
        ].map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col p-5 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-border/80 transition-all cursor-pointer"
          >
            <div className="mb-4">
              <BookOpen size={20} className="text-muted-foreground mb-3" />
              <div className="flex gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-border text-muted-foreground">
                  {post.tag}
                </span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
              <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
