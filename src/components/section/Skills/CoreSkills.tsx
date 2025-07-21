import { MotionContainer, MotionItem } from '@/components/common/Motion';
import TextList from '@/components/common/Text/TextList';
import { CORE_SKILL } from './constants';
import React from 'react';
import Subheading from '@/components/common/Text/Subheading';

const CoreSkills = () => {
  return (
    <MotionContainer as="div" amount={0.13}>
      <Subheading text={CORE_SKILL.subheading} />
      <ul className="flex flex-col gap-5 mb-10">
        {CORE_SKILL.skills.map(({ icon, text, descriptions }) => (
          <MotionItem
            as="li"
            key={text}
            className="p-5 rounded-xl shadow-md bg-[var(--color-sub-bg)]"
          >
            <article>
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-[1.4rem] md:text-2xl mb-0">{text}</h3>
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
