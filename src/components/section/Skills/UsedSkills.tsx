import { USED_SKILLS } from '@/components/section/Skills/constants';
import React from 'react';

const UsedSkills = () => {
  return (
    <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
      {USED_SKILLS.map(({ icon: Icon, name, color }) => (
        <li
          key={name}
          className="flex-center flex-col p-content rounded-xl bg-[var(--color-btn-bg)] shadow-[var(--shadow)] transition duration-200"
        >
          <Icon className="w-10 h-10 mb-2" style={{ color }} />
          <span className="text-sm">{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default UsedSkills;
