import { MotionContainer, MotionItem } from '@/components/common/motion';
import TextList from '@/components/common/TextList/TextList';
import { CORE_SKILL } from './constants';
import React from 'react';
import Subheading from '@/components/common/Subheading/Subheading';

const CoreSkills = () => {
  return (
    <MotionContainer as="div" amount={0.13}>
      <Subheading text={CORE_SKILL.subheading} />
      <ul className="flex flex-col gap-5 mb-10">
        {CORE_SKILL.skills.map(({ icon: Icon, name, descriptions, color }) => (
          <MotionItem
            as="li"
            key={name}
            className="p-5 rounded-xl shadow-md bg-[var(--color-sub-bg)]"
          >
            <article>
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-12 h-12" style={{ color }} />
                <p className="text-2xl">{name}</p>
              </div>
              <TextList textList={descriptions as string[]} />
            </article>
          </MotionItem>
        ))}
      </ul>
    </MotionContainer>
  );
};

export default CoreSkills;
