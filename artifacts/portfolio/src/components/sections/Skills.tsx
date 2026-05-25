import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    title: "Core PM",
    skills: ["Roadmapping", "Product Strategy", "Prototyping", "Customer Research", "Agile"],
    color: "border-blue-500/20 text-blue-400 bg-blue-500/10"
  },
  {
    title: "AI & Analytics",
    skills: ["GPT", "Claude", "Gemini", "Document AI", "n8n", "LangChain", "MCP", "RAG", "Prompt Design", "Tableau", "Power BI"],
    color: "border-purple-500/20 text-purple-400 bg-purple-500/10"
  },
  {
    title: "Technical",
    skills: ["Python", "SQL", "Java", "C#", "APIs", "SDKs", "RPA"],
    color: "border-green-500/20 text-green-400 bg-green-500/10"
  },
  {
    title: "Tools",
    skills: ["JIRA", "MS Office"],
    color: "border-orange-500/20 text-orange-400 bg-orange-500/10"
  },
  {
    title: "Certifications",
    skills: ["AI Product Management (OpenAI, Dec 2025)"],
    color: "border-neutral-500/20 text-neutral-400 bg-neutral-500/10"
  }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader title="skills_and_stack" />
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-start gap-4"
          >
            <h3 className="font-mono text-sm text-foreground md:w-36 shrink-0 md:pt-1">
              {category.title}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className={`font-mono text-xs px-2.5 py-1 rounded-sm border ${category.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
