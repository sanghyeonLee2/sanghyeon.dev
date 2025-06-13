import TextList from '@/components/common/TextList/TextList';
import { CORE_SKILLS } from '@/components/section/Skills/constants';
import React from 'react';

const CoreSkills = () => {
  return (
    <ul className="flex flex-col gap-5 mb-10">
      {CORE_SKILLS.map(({ icon: Icon, name, description, color }) => (
        <li key={name} className="p-5 rounded-xl shadow-md bg-[var(--color-sub-bg)]">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-12 h-12" style={{ color }} />
            <p className="text-2xl">{name}</p>
          </div>
          <TextList textList={description} />
        </li>
      ))}
    </ul>
  );
};

export default CoreSkills;
