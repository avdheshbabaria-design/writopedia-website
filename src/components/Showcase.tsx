import { motion } from "motion/react";
import { useState } from "react";
import { PlayCircle, Image as ImageIcon, LayoutGrid, Presentation, FileText } from "lucide-react";

const tabs = [
  { id: 'video', label: 'Video Edits', icon: PlayCircle },
  { id: 'studio', label: 'Studio Images', icon: ImageIcon },
  { id: 'ecommerce', label: 'E-Comm Bundles', icon: LayoutGrid },
  { id: 'presentations', label: 'Presentations', icon: Presentation },
  { id: 'copy', label: 'Local Copy', icon: FileText },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="showcase">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
           <div className="max-w-2xl">
             <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-4">
               Don't just imagine it. <span className="text-gradient">Explore it.</span>
             </h2>
             <p className="text-lg text-secondary">
               See how leading brands are deploying agentic video edits, cinematic reels, and hyper-local copy.
             </p>
           </div>
           
           <div className="flex bg-surface p-1 rounded-full border border-surface-border overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-surface-border text-primary shadow-sm' 
                      : 'text-secondary hover:text-primary hover:bg-surface-hover/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
           </div>
        </div>

        {/* Interactive Gallery Area Workspace */}
        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-surface rounded-3xl border border-surface-border overflow-hidden relative group">
           
           {/* Abstract Mocked Content based on tab */}
           <motion.div 
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
           >
              {activeTab === 'video' && (
                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-background">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent-crimson/10 to-accent-rose/10" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                       <PlayCircle className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                       <div className="h-full w-1/3 bg-accent-crimson rounded-full" />
                     </div>
                   </div>
                </div>
              )}
              
              {activeTab === 'studio' && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="bg-background rounded-2xl overflow-hidden relative">
                       <div className="absolute inset-0 bg-gradient-to-br from-accent-rose/10 to-transparent" />
                     </div>
                   ))}
                </div>
              )}

              {(activeTab !== 'video' && activeTab !== 'studio') && (
                <div className="text-secondary text-sm font-mono uppercase tracking-widest animate-pulse">
                   Simulating Agent Generation Engine...
                </div>
              )}
           </motion.div>

           {/* Hover overlay hint */}
           <div className="absolute top-4 right-4 bg-background/80 backdrop-blur border border-surface-border px-3 py-1.5 rounded-lg text-xs font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              Interactive Preview
           </div>
        </div>
      </div>
    </section>
  );
}
