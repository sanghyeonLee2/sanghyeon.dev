import { MotionContainer, MotionItem } from '@/components/common/motion';
import Subheading from '@/components/common/Subheading/Subheading';
import { USED_SKILL } from '@/components/section/Skills/constants';
import React from 'react';

const UsedSkills = () => {
  return (
    <MotionContainer as="div" amount={0.2}>
      <Subheading text={USED_SKILL.subheading} />
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {USED_SKILL.skills.map(({ icon, text }) => (
          <MotionItem
            as="li"
            key={text}
            className="flex-center flex-col gap-2.5 duration-200 hover:-translate-y-1 cursor-pointer p-content rounded-xl bg-[var(--color-btn-bg)] shadow-[var(--shadow)]"
          >
            {icon}
            <span className="text-[0.75rem] sm:text-[0.7rem]">{text}</span>
          </MotionItem>
        ))}
      </ul>
    </MotionContainer>
  );
};

export default UsedSkills;
