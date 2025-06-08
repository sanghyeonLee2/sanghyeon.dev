import { ExperienceType } from '@/components/section/Experience/experience.type';
import React from 'react';

const ExperienceList = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <ul className="divide-y divide-gray-300 mb-8">
      {experiences.map((experience) => (
        <li key={experience.name}>
          <article className="flex flex-col md:flex-row gap-6 p-content my-3">
            <div className=" flex-col md:items-start md:w-60 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-center">{experience.name}</h3>
              <p className="text-sm text-gray-400 text-center">{experience.period}</p>
            </div>

            <ul className="list-disc pl-5 flex-grow flex flex-col gap-2">
              {experience.contents.map((content) => (
                <li className="md:text-center" key={content}>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
