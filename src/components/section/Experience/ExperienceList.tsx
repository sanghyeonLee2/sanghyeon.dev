import { MotionContainer, MotionItem } from '@/components/common/motion';
import Subheading from '@/components/common/Subheading/Subheading';
import TextList from '@/components/common/TextList/TextList';
import { ExperienceType } from '@/components/section/Experience/experience.type';
import React from 'react';

const ExperienceList = ({ contents, subheading }: ExperienceType) => {
  return (
    <MotionContainer as="div" amount={0.25}>
      <Subheading text={subheading} />
      <ul className="divide-y divide-gray-300 mb-10">
        {contents.map((content) => (
          <li key={content.name}>
            <MotionItem as="article" className="flex flex-col md:flex-row gap-6 p-9">
              <div className="flex-center">
                <div className="flex-col md:items-start md:w-70 flex-shrink-0">
                  <h3 className="text-2xl font-semibold content-center text-center">
                    {content.name}
                  </h3>
                  <p className="text-sm text-gray-400 text-center">{content.period}</p>
                </div>
              </div>
              <div className="content-center">
                <TextList textList={content.summaries} />
              </div>
            </MotionItem>
          </li>
        ))}
      </ul>
    </MotionContainer>
  );
};

export default ExperienceList;
