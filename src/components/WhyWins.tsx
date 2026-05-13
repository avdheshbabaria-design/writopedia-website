import { motion } from "motion/react";
import { ShieldCheck, Users, Target, Globe, Zap, Cpu } from "lucide-react";

const reasons = [
  {
    title: "Ironclad Security",
    icon: ShieldCheck,
    desc: "Powered by an enterprise-grade RAG framework. Your data is end-to-end encrypted and never trains public AI."
  },
  {
    title: "AI-Human Stacking",
    icon: Users,
    desc: "True perfection requires a human eye. Add a professional, last-mile human touch to your agent-generated creatives."
  },
  {
    title: "Zero AI Slop",
    icon: Target,
    desc: "We fuse deep proprietary brand customization with human-in-the-loop stacking to eradicate robotic, off-brand content."
  },
  {
    title: "Hyper-Local Intelligence",
    icon: Globe,
    desc: "Regional dialects and nuanced localization adaptations baked right into your automated generation process."
  },
  {
    title: "Speed at Scale",
    icon: Zap,
    desc: "Generate month-long, multi-channel campaigns instantly instead of waiting weeks for external agencies."
  },
  {
    title: "Enterprise Customization",
    icon: Cpu,
    desc: "Tailored workflow systems built specifically for how your internal marketing team actually operates."
  }
];

export default function WhyWins() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="why-us">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">
            The Writopedia Edge: <br/> <span className="text-gradient">Scale Without Compromise.</span>
          </h2>
          <p className="text-lg text-secondary">
            Generic AI tools pump out repetitive content. We deliver fully orchestrated, enterprise-ready creative pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-surface-border hover:border-surface-border/80 transition-colors relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="mb-6 w-12 h-12 bg-background border border-surface-border rounded-xl flex items-center justify-center">
                 <reason.icon className="w-6 h-6 text-primary group-hover:text-accent-blue transition-colors" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">{reason.title}</h3>
              <p className="text-secondary leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
