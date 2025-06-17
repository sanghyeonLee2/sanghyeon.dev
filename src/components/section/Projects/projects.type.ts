import type { StaticImageData } from 'next/image';
import { LinkType } from '@/common/types';

export type ProjectsType = {
  subheading: string;
  contents: {
    key: number;
    period: string;
    title: string;
    imgs: StaticImageData[];
    techStack: string[];
    details: string[];
    description: string;
    linksOption: LinkOptionsType;
  }[];
};

export interface LinkOptionsType {
  subheading: string;
  contents: LinkType[];
}
export interface TechStackType {
  color: string;
  name: string;
}
