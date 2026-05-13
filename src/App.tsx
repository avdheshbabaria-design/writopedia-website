import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FeaturesGrid from './components/FeaturesGrid';
import BrandDNA from './components/BrandDNA';
import Showcase from './components/Showcase';
import WhyWins from './components/WhyWins';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './components/ThemeProvider';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-primary selection:bg-accent-violet/30 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <FeaturesGrid />
          <BrandDNA />
          <Showcase />
          <WhyWins />
          <Workflow />
          <Testimonials />
          <CtaSection />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

