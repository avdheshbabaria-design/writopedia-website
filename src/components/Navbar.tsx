import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-surface-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={theme === 'dark' ? "/Writopedia-2.jpg" : "/Writopedia-1.jpg"} alt="Writopedia AI Logo" className={`h-10 md:h-12 w-auto rounded-md ${theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`} />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-secondary hover:text-primary transition-colors text-sm font-medium tracking-wide">Platform</a>
            <a href="#brand-dna" className="text-secondary hover:text-primary transition-colors text-sm font-medium tracking-wide">Brand DNA</a>
            <a href="#showcase" className="text-secondary hover:text-primary transition-colors text-sm font-medium tracking-wide">Showcase</a>
            <a href="#why-us" className="text-secondary hover:text-primary transition-colors text-sm font-medium tracking-wide">Enterprise</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Log in
            </button>
            <button className="px-5 py-2.5 bg-primary text-background text-sm font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
              Book Demo
            </button>
          </div>

          <button 
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <img src={theme === 'dark' ? "/Writopedia-2.jpg" : "/Writopedia-1.jpg"} alt="Writopedia AI Logo" className={`h-10 md:h-12 w-auto rounded-md ${theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`} />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-primary hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-2xl font-display font-medium">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#brand-dna" onClick={() => setMobileMenuOpen(false)}>Brand DNA</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Enterprise</a>
          </nav>

          <div className="mt-auto flex flex-col gap-4 pb-[10vh]">
            <button className="w-full py-4 text-center border border-surface-border rounded-xl font-medium">
              Log in
            </button>
            <button className="w-full py-4 text-center bg-primary text-background rounded-xl font-semibold">
              Book Demo
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
