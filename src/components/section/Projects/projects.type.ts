import { LinkType } from '@/types/ui';
import type { StaticImageData } from 'next/image';

export type ProjectsType = {
  key: number;
  period: string;
  title: string;
  imgs: StaticImageData[];
  techStack: TechStackType[];
  details: string[];
  description: string;
  linksOptions: LinkType[];
};

export interface TechStackType {
  color: string;
  name: string;
}
