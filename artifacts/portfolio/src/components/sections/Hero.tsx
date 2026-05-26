import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const titles = ["AI Product Manager", "Builder", "Substack Writer", "AI Enthusiast"];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background dot grid and gradient */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-[1fr_250px] gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="font-mono text-primary text-sm tracking-wider">
              {">"} hello_world
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Dheenadayalan Kathirvel
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-mono flex items-center gap-2 h-8">
              <span>{">"}</span>
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-foreground inline-block"
              >
                {titles[titleIndex]}
              </motion.span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-primary inline-block"
              />
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Builder at heart, shipping AI products that create real impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://linkedin.com/in/dheenadayalan-kathirvel/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
              data-testid="hero-linkedin"
            >
              <FaLinkedin /> LinkedIn <ArrowRight size={16} />
            </a>
            <a 
              href="https://dheenakathirvel31.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground border border-border/50 px-5 py-2.5 rounded-md font-medium hover:bg-secondary/80 transition-colors text-sm"
              data-testid="hero-newsletter"
            >
              Newsletter <ArrowRight size={16} />
            </a>
            <a 
              href="/Dheenadayalan_Kathirvel_Resume.pdf"
              download="Dheenadayalan_Kathirvel_Resume.pdf"
              className="inline-flex items-center gap-2 bg-transparent text-foreground border border-border px-5 py-2.5 rounded-md font-medium hover:bg-muted transition-colors text-sm"
              data-testid="hero-resume"
            >
              <FileText size={16} /> Resume
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-transparent text-foreground border border-border px-5 py-2.5 rounded-md font-medium hover:bg-muted transition-colors text-sm"
              data-testid="hero-contact"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </motion.div>

        {/* Headshot Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-56 h-56 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm relative group overflow-hidden shadow-xl">
            <img
              src="/photos/headshot.jpg"
              alt="Dheenadayalan Kathirvel"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
