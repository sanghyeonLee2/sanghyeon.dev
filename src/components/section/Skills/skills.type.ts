import { IconType } from 'react-icons';

type BaseSkill = {
  name: string;
  icon: IconType;
  color: string;
};

export type UsedSkillsType = BaseSkill;

export type CoreSkillsType = BaseSkill & {
  description: string[];
};
