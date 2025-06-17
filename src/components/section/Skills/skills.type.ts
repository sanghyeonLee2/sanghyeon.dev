import { LinkType } from '@/types/types';

export type SkillType = {
  subheading: string;
  skills: ({
    descriptions?: string[];
  } & LinkType)[];
};
