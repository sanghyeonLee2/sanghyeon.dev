import { ExperienceType } from '@/components/section/Experience/experience.type';
import React from 'react';

const ExperienceList = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <ul className="divide-y divide-gray-300 mb-8">
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
              <ul className="list-disc pl-5 flex-grow flex flex-col gap-2">
                {experience.contents.map((content) => (
                  <li key={content}>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
