import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-rose/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-crimson/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface w-fit text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent-crimson" />
              <span className="text-secondary">Writopedia AI 2.0 is live</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              Generate a month’s worth of hyper-local brand campaigns in <span className="text-gradient-accent">three clicks.</span>
            </h1>
            
            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              Meet Writopedia AI—the world’s first brand-coherent design agent that instantly scales your multimedia campaigns without sacrificing brand identity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative px-8 py-4 bg-accent-crimson text-white font-medium rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:bg-accent-rose shadow-lg shadow-accent-crimson/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Your Live Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-surface hover:bg-surface-hover border border-surface-border text-primary font-medium rounded-full transition-colors flex items-center justify-center gap-2">
                Watch the Agent in Action
              </button>
            </div>
          </motion.div>

          {/* Right Side Video */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="w-full relative max-w-lg aspect-[9/16] rounded-3xl overflow-hidden glass-card border-surface-border">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-crimson/20 to-accent-rose/20 opacity-50 z-0" />
              
              <video 
                ref={videoRef}
                src="/agenticai.mp4" 
                autoPlay 
                muted={isMuted}
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-30 p-3 rounded-full bg-surface/50 backdrop-blur border border-surface-border text-primary hover:bg-surface hover:scale-105 transition-all shadow-xl"
              >
                {isMuted ? <VolumeX className="w-5 h-5 opacity-80" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
