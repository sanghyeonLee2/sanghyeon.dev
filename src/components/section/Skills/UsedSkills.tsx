import { MotionContainer, MotionItem } from '@/components/common/motion';
import Subheading from '@/components/common/Subheading/Subheading';
import { USED_SKILL } from '@/components/section/Skills/constants';
import React from 'react';

const UsedSkills = () => {
  return (
    <MotionContainer as="div" amount={0.2}>
      <Subheading text={USED_SKILL.subheading} />
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {USED_SKILL.skills.map(({ icon: Icon, name, color }) => (
          <MotionItem
            as="li"
            key={name}
            className="flex-center flex-col p-content rounded-xl bg-[var(--color-btn-bg)] shadow-[var(--shadow)]"
          >
            <Icon className="w-10 h-10 mb-2" style={{ color }} />
            <span className="text-sm">{name}</span>
          </MotionItem>
        ))}
      </ul>
    </MotionContainer>
  );
};

export default UsedSkills;
