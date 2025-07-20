import { FaGithub, FaBlog } from 'react-icons/fa';
import { LinkType } from '@/types/types';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
] as const;

const ICON_CLASS: string = 'text-2xl';

export const PROFILE_OPTIONS: LinkType[] = [
  {
    text: 'https://github.com/sanghyeonLee2',
    icon: <FaGithub className={ICON_CLASS} />,
    href: 'https://github.com/sanghyeonLee2',
  },
  {
    text: 'https://sanghyeon-blog.vercel.app',
    icon: <FaBlog className={ICON_CLASS} />,
    href: 'https://sanghyeon-blog.vercel.app',
  },
];
