import { Github, ScrollText } from 'lucide-react';
import { LinkType } from '@/types/ui';

export const PROFILE_OPTIONS: LinkType[] = [
  {
    text: 'https://github.com/sanghyeonLee2',
    icon: <Github />,
    href: 'https://github.com/sanghyeonLee',
  },
  {
    text: 'sanghyeon-blog.vercel.app',
    icon: <ScrollText />,
    href: 'sanghyeon-blog.vercel.app',
  },
];
