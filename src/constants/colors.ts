export const BRAND_COLORS = {
  react: '#61dafb',
  tailwind: '#38bdf8',
  typescript: '#3178c6',
  javascript: '#f7df1e',
  next: '#000000',
  markdown: '#083fa1',
  figma: '#a259ff',
  github: '#181717',
  vercel: '#000000',
  firebase: '#FFCA28',
  notion: '#000000',
  postman: '#FF6C37',
} as const;

export type BrandName = keyof typeof BRAND_COLORS;
