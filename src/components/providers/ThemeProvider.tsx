'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { JSX } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <NextThemesProvider enableSystem={false} defaultTheme="light" attribute="class">
      {children}
    </NextThemesProvider>
  );
}
