import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-surface/50 backdrop-blur border border-surface-border text-primary hover:bg-surface hover:scale-105 transition-all shadow-xl"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5 opacity-80 hover:opacity-100" /> : <Moon className="w-5 h-5 opacity-80 hover:opacity-100" />}
    </button>
  );
}
