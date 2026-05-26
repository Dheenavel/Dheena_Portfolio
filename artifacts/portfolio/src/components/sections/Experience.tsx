import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const experiences = [
  {
    company: "Tesla",
    logo: "/photos/tesla.jpg",
    logoAlt: "Tesla",
    logoBg: "bg-black",
    role: "AI Product Manager",
    dates: "2025 – Present",
    location: "Austin, TX",
    note: null,
    bullets: [],
    photo: "/photos/tesla.jpg",
  },
  {
    company: "Deluxe Corporation",
    logo: "/logos/deluxe-logo.png",
    logoAlt: "Deluxe Corporation logo",
    logoBg: "bg-white",
    role: "AI Product Manager",
    dates: "Jul 2024 – 2025",
    location: "Atlanta, GA",
    note: null,
    bullets: [
      'Launched GenAI Document AI (OCR + entity extraction + ML 3-way matching), earned "Red Shoes Award"',
      "Deployed GenAI chatbots (Claude + GPT APIs) on Deluxe.com and MyCorporation.com, 30% call center volume reduction",
      "Built AI call deflection + analytics product for Print & Promo, $300K cost savings, NPS +40%",
      "Drove $2M in savings + 50K+ labor hours saved across 4 business units via automation",
    ],
    photo: null,
  },
  {
    company: "Dell Technologies",
    logo: "/logos/dell-logo.png",
    logoAlt: "Dell Technologies logo",
    logoBg: "bg-white",
    role: "Graduate PM Intern, Multi Cloud (ISG)",
    dates: "May 2023 – Aug 2023",
    location: "Austin, TX",
    note: null,
    bullets: [
      "Competitive analysis of 3 hybrid/multi-cloud competitors, shaped product strategy",
      "30+ stakeholder interviews → product enhancement influence",
      'Awarded "Bravo Dell Inspire"',
    ],
  },
  {
    company: "Philips India",
    logo: "/logos/philips-logo.png",
    logoAlt: "Philips logo",
    logoBg: "bg-[#0B1E8F]",
    role: "Software Development Engineer II/I, Image Acquisition Platform",
    dates: "Feb 2019 – Jun 2022",
    location: "Bangalore, India",
    note: null,
    bullets: [
      "Call rate analysis launch → 30% complaint reduction",
      "MRI software upgrade prioritization → 10% backup time reduction",
      'Earned "Q1-2021 Quality Champion Award"',
      "60% team efficiency boost through workflow automation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeader title="experience" />

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            data-testid={`experience-entry-${index}`}
          >
            {/* Company Logo */}
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border border-border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_hsl(var(--background))] relative z-10 overflow-hidden p-1.5 ${exp.logoBg}`}>
              <img
                src={exp.logo}
                alt={exp.logoAlt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors overflow-hidden">
              {exp.photo && exp.bullets.length === 0 && (
                <div className="h-32 overflow-hidden relative">
                  <img src={exp.photo} alt={`${exp.company} visual`} className="w-full h-full object-cover object-center opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col space-y-1 mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                  <div className="font-mono text-sm text-primary">{exp.company}</div>
                  {exp.note && (
                    <div className="font-mono text-xs text-amber-500/70 italic">{exp.note}</div>
                  )}
                  <div className="font-mono text-xs text-muted-foreground flex items-center justify-between mt-1">
                    <span>{exp.dates}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.bullets.length > 0 && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary/50 shrink-0 mt-0.5">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
