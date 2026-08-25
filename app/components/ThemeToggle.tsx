'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('theme');
    } catch {
      stored = null;
    }
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      return;
    }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode: the choice still applies for this session */
    }
  }

  // Render a stable placeholder until the effect resolves, so the markup
  // matches the server output and the label never flickers.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="cursor-pointer bg-transparent p-0 text-sm underline-offset-4 hover:underline"
      style={{ color: 'var(--link)', font: 'inherit', minWidth: '3.5rem' }}
    >
      {theme === null ? ' ' : theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
