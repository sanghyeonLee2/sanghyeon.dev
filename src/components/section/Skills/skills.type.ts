import { IconType } from 'react-icons';

export type SkillType = {
  subheading: string;
  skills: {
    name: string;
    icon: IconType;
    color: string;
    descriptions?: string[];
  }[];
};
