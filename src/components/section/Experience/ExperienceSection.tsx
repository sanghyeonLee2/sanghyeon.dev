import Subheading from '@/components/common/Subheading/Subheading';
import { EDUCATION, ACTIVITIES, CERTIFICATION } from '@/components/section/Experience/constants';
import ExperienceList from '@/components/section/Experience/ExperienceList';
import React from 'react';

const ExperienceSection = () => {
  return (
    <>
      <Subheading text="🎓 Education" />
      <ExperienceList experiences={EDUCATION} />
      <Subheading text="💡 Activities" />
      <ExperienceList experiences={ACTIVITIES} />
      <Subheading text="🛠️ Certifications" />
      <ExperienceList experiences={CERTIFICATION} />
    </>
  );
};

export default ExperienceSection;
