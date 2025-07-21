'use client';
import React from 'react';
import { PROJECT } from '@/components/section/Projects/constants';
import TechStack from './TechStack';
import LinkOptions from '@/components/section/Projects/LinkOptions';
import ImageSlider from '@/components/section/Projects/ImageSlider';
import Subheading from '@/components/common/Text/Subheading';
import TextList from '@/components/common/Text/TextList';
import { MotionContainer, MotionItem } from '@/components/common/Motion';

const Projects = () => {
  return (
    <ul className="divide-y divide-gray-300">
      {PROJECT.contents.map((content) => (
        <MotionContainer as="li" amount={0.2} key={content.title} className="h-full py-12">
          <article>
            <MotionItem as="div">
              <h3 className="pb-2">{content.title}</h3>
              <p className="text-[0.9rem] sm:text-[1.1rem] pb-1 font-semibold">
                {content.personnel}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">{content.period}</p>
            </MotionItem>
            <TechStack techStack={content.techStack} />
            <ImageSlider imgs={content.imgs} />
            <MotionItem
              as="p"
              className="p-5 my-6 bg-[var(--color-sub-bg)] break-keep rounded-lg whitespace-pre-line font-semibold"
            >
              {content.description}
            </MotionItem>
            <div className="mt-8">
              <Subheading text={PROJECT.subheading} />
              <MotionItem as="div">
                <TextList textList={content.details} />
              </MotionItem>
            </div>
            <LinkOptions linksOption={content.linksOption} />
          </article>
        </MotionContainer>
      ))}
    </ul>
  );
};

export default Projects;
