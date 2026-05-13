import { motion } from "motion/react";
import { BrainCircuit, Database, MapPin, Zap } from "lucide-react";

export default function BrandDNA() {
  return (
    <section className="py-24 bg-surface/50 border-y border-surface-border relative overflow-hidden" id="brand-dna">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Visual Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/20 via-transparent to-accent-cyan/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="absolute inset-0 border border-surface-border rounded-full flex items-center justify-center">
                <div className="absolute w-[80%] h-[80%] border border-surface-border rounded-full flex items-center justify-center border-dashed">
                  <div className="absolute w-[60%] h-[60%] border border-accent-blue/30 rounded-full flex items-center justify-center bg-accent-blue/5">
                     <div className="w-24 h-24 bg-background border border-surface-border rounded-full flex items-center justify-center shadow-2xl relative z-10">
                        <BrainCircuit className="w-10 h-10 text-primary" />
                     </div>
                  </div>
                </div>
              </div>

              {/* Orbiting nodes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -ml-6 w-12 h-12 bg-surface border border-surface-border rounded-full flex items-center justify-center text-xs font-bold -translate-y-1/2 shadow-lg">
                  Assets
                </div>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%]"
              >
                <div className="absolute top-1/2 right-0 -mt-5 w-10 h-10 bg-surface border border-surface-border rounded-full flex items-center justify-center -translate-x-1/2 translate-x-full shadow-lg">
                  <Database className="w-4 h-4 text-accent-cyan" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">
                Your AI agent doesn't just generate. <br/><span className="text-gradient">It learns your brand.</span>
              </h2>
              <p className="text-lg text-secondary">
                Drop your guidelines into the Brand Assets tab, and the agent learns your identity instantly.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-1">Instant Onboarding</h4>
                    <p className="text-secondary leading-relaxed">No complex setup. Upload PDFs, logos, and past campaigns. The agent builds a proprietary data model specific to your exact brand requirements.</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 text-accent-violet" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-1">Bespoke AI Fine-Tuning</h4>
                    <p className="text-secondary leading-relaxed">Need a tailored engine? Writopedia can customize and train Custom "Gems" for your automated workflows.</p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-1">Hyper-Local Precision</h4>
                    <p className="text-secondary leading-relaxed">Seamlessly deploy campaigns in regional dialects and local slang with over 90% brand accuracy.</p>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
