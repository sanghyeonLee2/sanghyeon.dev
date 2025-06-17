import { LinkType } from '@/common/types';

export type SkillType = {
  subheading: string;
  skills: ({
    descriptions?: string[];
  } & LinkType)[];
};
