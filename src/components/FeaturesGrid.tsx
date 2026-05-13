import { motion } from "motion/react";
import { PenTool, Image as ImageIcon, Video, Presentation, Layout, MonitorSmartphone, LayoutGrid } from "lucide-react";

const features = [
  {
    title: "Text & Copy",
    icon: PenTool,
    description: "Hyper-local copy, scripts, and storylines.",
    colSpan: "lg:col-span-1",
    delay: 0.1
  },
  {
    title: "Visuals",
    icon: ImageIcon,
    description: "Studio-quality images, custom avatars, and graphics.",
    colSpan: "lg:col-span-2",
    delay: 0.2
  },
  {
    title: "Motion & Post-Production",
    icon: Video,
    description: "Cinematic HD, 2K, 4K videos and seamless agentic video edits.",
    colSpan: "lg:col-span-2",
    delay: 0.3
  },
  {
    title: "Presentations",
    icon: Presentation,
    description: "Dynamic, brand-aligned slide decks.",
    colSpan: "lg:col-span-1",
    delay: 0.4
  },
  {
    title: "Bundles & Campaigns",
    icon: LayoutGrid,
    description: "Ready-to-publish e-commerce packages and full-funnel layouts.",
    colSpan: "lg:col-span-3",
    delay: 0.5
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-background relative" id="features">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">
            One Agent. <span className="text-gradient-accent">Infinite Outputs.</span>
          </h2>
          <p className="text-lg text-secondary">
            Command your dedicated AI agent to generate a massive array of production-ready assets in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={`glass-card rounded-2xl p-8 flex flex-col group hover:bg-surface-hover/50 transition-colors ${feature.colSpan}`}
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent-crimson/50 transition-all">
                <feature.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-accent-crimson/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[30vw] h-[30vw] bg-accent-rose/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
