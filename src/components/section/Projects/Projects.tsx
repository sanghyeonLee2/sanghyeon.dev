'use client';
import React from 'react';
import { PROJECT } from '@/components/section/Projects/constants';
import TechStack from './TechStack';
import LinkOptions from '@/components/section/Projects/LinkOptions';
import ImageSlider from '@/components/section/Projects/ImageSlider';
import Subheading from '@/components/common/Subheading/Subheading';
import TextList from '@/components/common/TextList/TextList';
import { MotionContainer, MotionItem } from '@/components/common/Motion';

const Projects = () => {
  return (
    <ul className="divide-y divide-gray-300">
      {PROJECT.contents.map((content) => (
        <MotionContainer as="li" amount={0.2} key={content.key} className="h-full py-10">
          <article>
            <MotionItem as="div">
              <h3>{content.title}</h3>
              <p className="text-gray-400 text-sm md:text-[1.1rem]">{content.personnel}</p>
              <p className="text-gray-400 text-sm md:text-[1.1rem]">{content.period}</p>
            </MotionItem>
            <TechStack techStack={content.techStack} />
            <ImageSlider imgs={content.imgs} />
            <MotionItem as="p" className="p-5 my-5 bg-[var(--color-sub-bg)] rounded-lg">
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
