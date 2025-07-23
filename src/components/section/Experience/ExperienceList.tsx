'use client';
import { MotionContainer, MotionItem } from '@/components/common/Motion';
import Subheading from '@/components/common/Text/Subheading';
import TextList from '@/components/common/Text/TextList';
import { ExperienceType } from '@/components/section/Experience/experience.type';
import clsx from 'clsx';
import React from 'react';

const ExperienceList = ({ contents, subheading, isLast = false }: ExperienceType) => {
  return (
    <MotionContainer as="div" amount={0.25}>
      <Subheading text={subheading} />
      <ul className={clsx('divide-y divide-gray-300', !isLast && 'mb-10')}>
        {contents.map((content) => (
          <li key={content.name}>
            <MotionItem as="article" className="flex flex-col md:flex-row gap-6 py-8 px-3">
              <div className="flex-col md:w-70 flex-shrink-0 content-center">
                <h3 className="text-xl md:text-2xl content-center text-center break-keep">
                  {content.name}
                </h3>
                <p className="text-sm text-gray-400 text-center">{content.period}</p>
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
