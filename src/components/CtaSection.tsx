import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-surface">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-gradient-to-tr from-accent-blue/10 via-accent-violet/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
       </div>

       <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
             Stop scaling your effort. <br/>
             <span className="text-gradient">Start scaling your output.</span>
           </h2>
           <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
             Transform your campaign workflow with intelligent, brand-trained creative agents.
           </p>

           <button className="group relative px-10 py-5 bg-primary text-background font-medium rounded-full overflow-hidden transition-all hover:scale-[1.02] text-lg">
             <span className="relative z-10 flex items-center justify-center gap-2">
               Book Your Live Demo
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </span>
             <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan opacity-0 group-hover:opacity-20 transition-opacity" />
           </button>
           
           <p className="mt-6 text-sm text-secondary">
             Join leading enterprise teams leveraging AI scale.
           </p>
         </motion.div>
       </div>
    </section>
  );
}
