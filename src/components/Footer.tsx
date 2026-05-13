import { Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-surface-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={theme === 'dark' ? "/Writopedia-2.jpg" : "/Writopedia-1.jpg"} alt="Writopedia AI Logo" className={`h-10 md:h-12 w-auto rounded-md ${theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`} />
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              The creative operating system for enterprise brand scaling. Generate, stack, and deploy perfectly on-brand campaigns.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Platform</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Brand DNA Engine</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Localization</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Enterprise Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} Writopedia AI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-secondary font-mono tracking-widest uppercase">
             <span>System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
