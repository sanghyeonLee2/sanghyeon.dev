import Subheading from '@/components/common/Subheading/Subheading';
import CoreSkills from '@/components/section/Skills/CoreSkills';
import UsedSkills from '@/components/section/Skills/UsedSkills';
import React from 'react';

const SkillsSection = () => {
  return (
    <>
      <Subheading text={'💡 Core Tech Stack'} />
      <CoreSkills />
      <Subheading text={'🧪 Other Tools I’ve Used'} />
      <UsedSkills />
    </>
  );
};

export default SkillsSection;
