import type { StaticImageData } from 'next/image';
import { LinkType } from '@/common/types';

export type ProjectsType = {
  subheading: string;
  contents: {
    key: number;
    period: string;
    title: string;
    imgs: StaticImageData[];
    techStack: TechStackType[];
    details: string[];
    description: string;
    linksOptions: LinkType[];
  }[];
};

export interface TechStackType {
  color: string;
  name: string;
}
