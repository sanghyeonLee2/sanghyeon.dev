import { MotionContainer, MotionItem } from '@/components/common/Motion';
import Subheading from '@/components/common/Text/Subheading';
import { USED_SKILL } from '@/components/section/Skills/constants';
import React from 'react';

const UsedSkills = () => {
  return (
    <MotionContainer as="div" amount={0.2}>
      <Subheading text={USED_SKILL.subheading} />
      <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {USED_SKILL.skills.map(({ icon, text }) => (
          <MotionItem
            as="li"
            key={text}
            className="flex-center flex-col gap-2.5 duration-200 hover:-translate-y-1 cursor-pointer px-1 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[var(--shadow)]"
          >
            {icon}
            <span className="text-[0.75rem] sm:text-[0.9rem] text-center">{text}</span>
          </MotionItem>
        ))}
      </ul>
    </MotionContainer>
  );
};

export default UsedSkills;
