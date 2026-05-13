import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We scaled our regional D2C campaigns by 10x without adding headcount. Every single creative stays fiercely on-brand.",
    author: "Marketing Director",
    company: "Zydus Wellness",
    metrics: "↑ 400% Asset Volume"
  },
  {
    quote: "The hyper-local adaptation is flawless. The agent understands nuanced dialects that used to take our copywriters days to research.",
    author: "Creative Lead",
    company: "Sugar Free",
    metrics: "↓ 80% Production Time"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background border-y border-surface-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.2 }}
               className="glass-card p-10 rounded-3xl"
             >
               <Quote className="w-10 h-10 text-surface-border mb-6" />
               <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed mb-8">
                 "{t.quote}"
               </p>
               <div className="flex items-center justify-between border-t border-surface-border pt-6">
                 <div>
                   <div className="font-medium text-primary">{t.author}</div>
                   <div className="text-sm text-secondary">{t.company}</div>
                 </div>
                 <div className="px-3 py-1 bg-surface rounded-full text-xs font-semibold text-accent-crimson tracking-wider uppercase border border-surface-border">
                   {t.metrics}
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
