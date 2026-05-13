import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Upload Brand Assets", desc: "Ingest guidelines, logos, and past top-performing campaigns." },
  { num: "02", title: "Train Brand Agent", desc: "Our RAG system builds a unique, private logic map for your brand." },
  { num: "03", title: "Generate Campaigns", desc: "Instantly create copy, video, and bundles across formats." },
  { num: "04", title: "Human Stacking", desc: "Optional human-in-the-loop refinement for absolute perfection." },
  { num: "05", title: "Publish Everywhere", desc: "Export and deploy your localized assets across all channels." },
];

export default function Workflow() {
  return (
    <section className="py-24 bg-surface border-y border-surface-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">
            Agentic Workflow. <span className="text-gradient">Simplified.</span>
          </h2>
          <p className="text-lg text-secondary">
            From ingestion to final deployment, Writopedia orchestrates your entire creative pipeline.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-surface-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
             {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative flex flex-col pt-8 lg:pt-0"
                >
                  <div className="hidden lg:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-surface-border z-10" />
                  
                  <div className="lg:mt-24 flex flex-col items-start lg:items-center lg:text-center">
                    <span className="font-display text-4xl font-bold text-surface-border mb-4 block">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-medium text-primary mb-2">
                       {step.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                       {step.desc}
                    </p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
