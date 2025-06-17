import { EXPERIENCES } from '@/components/section/Experience/constants';
import ExperienceList from '@/components/section/Experience/ExperienceList';
import React from 'react';

const Experience = () => {
  return (
    <>
      {EXPERIENCES.map((experience) => (
        <ExperienceList
          key={experience.subheading}
          contents={experience.contents}
          subheading={experience.subheading}
          isLast={experience === EXPERIENCES.at(-1)}
        />
      ))}
    </>
  );
};

export default Experience;
