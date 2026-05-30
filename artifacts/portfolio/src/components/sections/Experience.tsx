import { useRef, useState, useEffect, forwardRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiDell, SiTesla } from "react-icons/si";
import { experience } from "@/config/portfolio.config";

const ICON_LOGOS: Record<string, React.ReactNode> = {
  Tesla: <SiTesla size={18} className="text-[#CC0000]" />,
  "Dell Technologies": <SiDell size={20} className="text-[#007DB8]" />,
};

function chipColor(stat: string) {
  if (/award|champion|inspire/i.test(stat)) return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  if (/[\$\%]|\d+[KM]/i.test(stat)) return "bg-green-500/10 text-green-400 border-green-500/20";
  return "bg-blue-500/10 text-blue-400 border-blue-500/20";
}

type Exp = (typeof experience)[number];
type Product = Exp["products"][number];

// ── Animated metric counter ───────────────────────────────────────────────────
function parseMetricValue(stat: string): { prefix: string; value: number; suffix: string } | null {
  const dollarMatch = stat.match(/\$(\d+(?:\.\d+)?)(K|M|B)?\+?/);
  if (dollarMatch) {
    return { prefix: "$", value: parseFloat(dollarMatch[1]), suffix: (dollarMatch[2] ?? "") + "+" };
  }
  const kMatch = stat.match(/^(\d+)(K)\+?/);
  if (kMatch) {
    return { prefix: "", value: parseInt(kMatch[1]), suffix: "K+" };
  }
  const percentMatch = stat.match(/\+?(\d+(?:\.\d+)?)%/);
  if (percentMatch) {
    return { prefix: "+", value: parseFloat(percentMatch[1]), suffix: "%" };
  }
  return null;
}

function ImpactChip({ stat }: { stat: string }) {
  const parsed = parseMetricValue(stat);
  const motionVal = useMotionValue(0);
  const chipRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : stat
  );

  useEffect(() => {
    if (!parsed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(motionVal, parsed.value, {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (v: number) => setDisplayText(`${parsed.prefix}${Math.round(v)}${parsed.suffix}`),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (chipRef.current) observer.observe(chipRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={chipRef}
      className={`font-mono text-[10px] px-2.5 py-1 rounded-full border tabular-nums ${chipColor(stat)}`}
    >
      {displayText}
    </span>
  );
}

// ── Product card ──────────────────────────────────────────────────────────────
const productVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.32, ease: "easeOut" },
  }),
};

function ProductCard({
  product,
  index,
  featured,
}: {
  product: Product;
  index: number;
  featured: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={productVariants}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className={`rounded-xl border p-4 flex flex-col gap-2.5 transition-colors ${
        featured
          ? "col-span-2 border-primary/25 bg-gradient-to-br from-primary/5 to-card/40 hover:from-primary/10"
          : "border-border/60 bg-card/40 hover:bg-card/65"
      }`}
    >
      <p className="font-mono text-sm font-semibold text-primary leading-snug">{product.name}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
      {product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {product.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-wide px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function BentoProductGrid({ exp }: { exp: Exp }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40 uppercase mb-3">
        Built
      </p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={`grid gap-3 ${exp.products.length === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-2"}`}
      >
        {exp.products.map((product, i) => {
          const featured =
            exp.products.length >= 3 && i === 0 && product.tags.length > 0;
          return (
            <ProductCard key={product.name} product={product} index={i} featured={featured} />
          );
        })}
      </motion.div>
    </div>
  );
}

// ── Company section (right pane content) ──────────────────────────────────────
interface CompanySectionProps {
  exp: Exp;
}

const CompanySection = forwardRef<HTMLDivElement, CompanySectionProps>(({ exp }, ref) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="scroll-mt-28 space-y-6">
      {/* Kinetic header */}
      <div ref={headerRef} className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.25 }}
            className={`flex items-center justify-center w-14 h-14 rounded-2xl border border-border shrink-0 overflow-hidden p-2.5 ${
              ICON_LOGOS[exp.company] ? "bg-card" : exp.logoBg
            }`}
          >
            {ICON_LOGOS[exp.company] ?? (
              <img src={exp.logo} alt={exp.logoAlt} className="w-full h-full object-contain" />
            )}
          </motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="font-bold text-xl text-foreground leading-tight"
            >
              {exp.role}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="font-mono text-sm text-primary mt-0.5"
            >
              {exp.company}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="font-mono text-sm text-muted-foreground text-right shrink-0"
        >
          <div>{exp.dates}</div>
          <div className="mt-0.5 text-muted-foreground/60 text-xs">{exp.location}</div>
        </motion.div>
      </div>

      {/* Context */}
      {exp.context && (
        <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4 leading-relaxed max-w-2xl">
          {exp.context}
        </p>
      )}

      {/* Products bento grid */}
      {exp.products.length > 0 && <BentoProductGrid exp={exp} />}

      {/* Impact chips with animated counters */}
      {exp.impact.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
          {exp.impact.map((stat) => (
            <ImpactChip key={stat} stat={stat} />
          ))}
        </div>
      )}
    </div>
  );
});
CompanySection.displayName = "CompanySection";

// ── Sidebar ───────────────────────────────────────────────────────────────────
function TimelineSidebarItem({
  exp,
  isActive,
  onClick,
}: {
  exp: Exp;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll to ${exp.company}`}
      className="flex items-start gap-3 py-3 text-left w-full group cursor-pointer"
    >
      {/* Timeline dot */}
      <div
        className={`relative z-10 mt-1 w-[18px] h-[18px] shrink-0 rounded-full border-2 transition-all duration-200 ${
          isActive
            ? "border-primary bg-primary scale-110"
            : "border-border/60 bg-background group-hover:border-primary/40"
        }`}
      />
      <div className="flex flex-col gap-0.5 min-w-0">
        <div
          className={`flex items-center gap-1.5 transition-all duration-200 ${
            isActive ? "opacity-100" : "opacity-35 group-hover:opacity-60"
          }`}
        >
          {ICON_LOGOS[exp.company] ? (
            <span className="shrink-0">{ICON_LOGOS[exp.company]}</span>
          ) : (
            <div
              className={`w-4 h-4 rounded-full overflow-hidden shrink-0 border border-border/40 ${exp.logoBg}`}
            >
              <img src={exp.logo} alt="" className="w-full h-full object-contain p-0.5" />
            </div>
          )}
          <span
            className={`font-mono text-xs font-semibold truncate transition-colors duration-200 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {exp.company}
          </span>
        </div>
        <span
          className={`font-mono text-[10px] transition-all duration-200 ${
            isActive ? "text-primary" : "text-muted-foreground/30"
          }`}
        >
          {exp.dates}
        </span>
      </div>
    </button>
  );
}

function TimelineSidebar({
  activeIndex,
  onItemClick,
}: {
  activeIndex: number;
  onItemClick: (i: number) => void;
}) {
  return (
    <aside className="w-[220px] shrink-0">
      <div className="sticky top-24 pt-12">
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground/40 uppercase mb-5 flex items-center gap-2">
          <span className="text-primary/50">//</span> experience
        </div>
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[9px] top-3 bottom-3 w-px bg-border/40" aria-hidden="true" />
          {experience.map((exp, i) => (
            <TimelineSidebarItem
              key={i}
              exp={exp}
              isActive={i === activeIndex}
              onClick={() => onItemClick(i)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

// ── Desktop: sticky timeline navigator ───────────────────────────────────────
function DesktopTimelineExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4;
      let newActive = 0;
      sectionRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= threshold) newActive = i;
      });
      if (newActive !== activeIndexRef.current) {
        activeIndexRef.current = newActive;
        setActiveIndex(newActive);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(i: number) {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="max-w-6xl mx-auto px-8 xl:px-16 flex gap-12 py-16">
      <TimelineSidebar activeIndex={activeIndex} onItemClick={scrollToSection} />
      <div className="flex-1 space-y-24">
        {experience.map((exp, i) => (
          <CompanySection
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            exp={exp}
          />
        ))}
      </div>
    </div>
  );
}

// ── Mobile: stacked cards with horizontal product snap-scroll ─────────────────
function MobileCard({ exp }: { exp: Exp }) {
  return (
    <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50 flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border border-border shrink-0 overflow-hidden p-1.5 ${
            ICON_LOGOS[exp.company] ? "bg-card" : exp.logoBg
          }`}
        >
          {ICON_LOGOS[exp.company] ?? (
            <img src={exp.logo} alt={exp.logoAlt} className="w-full h-full object-contain" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-foreground leading-tight">{exp.role}</h3>
          <div className="font-mono text-xs text-primary">{exp.company}</div>
        </div>
        <div className="text-right font-mono text-xs text-muted-foreground shrink-0">
          <div>{exp.dates}</div>
          <div>{exp.location}</div>
        </div>
      </div>
      <div className="px-5 py-4 space-y-4">
        {exp.context && (
          <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            {exp.context}
          </p>
        )}
        {exp.products.length > 0 && (
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase mb-2">
              Built
            </p>
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none">
              {exp.products.map((p) => (
                <div
                  key={p.name}
                  className="snap-start shrink-0 w-64 rounded-lg border border-border/60 bg-background/40 p-3 flex flex-col gap-1.5"
                >
                  <p className="font-mono text-xs font-semibold text-primary">{p.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                  {p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {exp.impact.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
            {exp.impact.map((s) => (
              <span
                key={s}
                className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${chipColor(s)}`}
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Public export ─────────────────────────────────────────────────────────────
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      {/* Mobile */}
      <div className="md:hidden px-4 pb-8">
        <SectionHeader title="experience" />
        <div className="space-y-6 mt-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <MobileCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: full-bleed sticky timeline navigator */}
      <div
        className="hidden md:block"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <DesktopTimelineExperience />
      </div>
    </section>
  );
}
