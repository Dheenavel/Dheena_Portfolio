import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Texas A&M University, Mays Business School",
    degree: "MBA",
    date: "May 2024",
    location: "College Station, TX"
  },
  {
    school: "PSG College of Technology",
    degree: "B.Tech, Information Technology",
    date: "May 2019",
    location: "Coimbatore, India"
  }
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader title="education" />
      
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg border border-border bg-card/50"
          >
            <GraduationCap size={24} className="text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg text-foreground mb-1">{edu.degree}</h3>
            <p className="font-mono text-sm text-primary mb-4">{edu.school}</p>
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>{edu.date}</span>
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
