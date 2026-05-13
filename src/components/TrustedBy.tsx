import { motion } from 'motion/react';

const logos = [
  "Zydus Wellness",
  "Sugar Free",
  "Everyuth",
  "Nycil",
  "Troth Insurance",
  "Varmine"
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-surface-border bg-surface/30 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col items-center max-w-7xl">
        <p className="text-secondary text-sm font-medium tracking-wide uppercase mb-8">
          Trusted by Industry Leaders Scaling High-Volume Campaigns
        </p>

        <div className="relative w-full flex overflow-x-hidden">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div 
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the list to create a seamless infinite loop */}
            {[...logos, ...logos].map((name, i) => (
              <div 
                key={i} 
                className="text-2xl font-display font-bold text-secondary/40 hover:text-primary transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
