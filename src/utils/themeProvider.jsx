import { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext.jsx';

function getInitialTheme() {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Sync <html> class & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Optional: react to system theme changes when user hasn't explicitly chosen
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      const saved = localStorage.getItem('theme');
      if (!saved) setIsDark(e.matches);
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setIsDark(d => !d);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;