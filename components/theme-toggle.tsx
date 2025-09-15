"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar el tema guardado en localStorage o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-stone-200 dark:bg-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-stone-300 dark:hover:bg-stone-600"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
    >
      <span
        className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white dark:bg-stone-800 shadow-lg transition-all duration-300 ${
          isDark ? 'translate-x-3' : '-translate-x-3'
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-stone-600" strokeWidth={2} />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
