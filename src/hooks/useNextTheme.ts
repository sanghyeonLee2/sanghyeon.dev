'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type UseNextThemeReturn = {
  setTheme: () => void;
  mounted: boolean;
  currentTheme: string | undefined;
};

export function useNextTheme(): UseNextThemeReturn {
  const { resolvedTheme, setTheme, theme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    setTheme: toggleTheme,
    mounted,
    currentTheme,
  };
}
