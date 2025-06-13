import TextList from '@/components/common/TextList/TextList';
import { ExperienceType } from '@/components/section/Experience/experience.type';
import React from 'react';

const ExperienceList = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <ul className="divide-y divide-gray-300 mb-10">
      {experiences.map((experience) => (
        <li key={experience.name}>
          <article className="flex flex-col md:flex-row gap-6 p-9 my-3">
            <div className="flex-center">
              <div className="flex-col md:items-start md:w-70 flex-shrink-0">
                <h3 className="text-2xl font-semibold content-center text-center">
                  {experience.name}
                </h3>
                <p className="text-sm text-gray-400 text-center">{experience.period}</p>
              </div>
            </div>
            <div className="content-center">
              <TextList textList={experience.contents} />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
