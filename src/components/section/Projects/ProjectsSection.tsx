'use client';
import React from 'react';
import { PROJECTS } from '@/components/section/Projects/constants';
import TechStack from './TechStack';
import LinkOptions from '@/components/section/Projects/LinkOptions';
import ImageSlider from '@/components/section/Projects/ImageSlider';
import Subheading from '@/components/common/Subheading/Subheading';
import TextList from '@/components/common/TextList/TextList';

const ProjectsSection = () => {
  return (
    <ul className="divide-y divide-gray-300">
      {PROJECTS.map((project) => (
        <li key={project.key} className="h-full py-10">
          <article>
            <div className="flex-center-between">
              <div>
                <h3 className="text-4xl">{project.title}</h3>
                <p className="text-gray-400">{project.period}</p>
              </div>
              <LinkOptions linksOptions={project.linksOptions} />
            </div>
            <TechStack techStack={project.techStack} />
            <ImageSlider imgs={project.imgs} />
            <p className="p-5 my-5 bg-[var(--color-sub-bg)] rounded-lg">{project.description}</p>
            <div className="mt-8">
              <Subheading text="📝 상세내용" />
              <TextList textList={project.details} />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsSection;
