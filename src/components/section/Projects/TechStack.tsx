import { MotionItem } from '@/components/common/motion';
import { TechStackType } from '@/components/section/Projects/projects.type';
import React from 'react';

const TechStack = ({ techStack }: { techStack: TechStackType[] }) => {
  return (
    <MotionItem as="div" className="flex gap-2 flex-wrap py-content">
      {techStack.map((tech) => (
        <span
          key={tech.name}
          style={{ backgroundColor: `${tech.color}CC` }}
          className={`text-sm px-2 py-0.5 rounded text-white`}
        >
          {tech.name}
        </span>
      ))}
    </MotionItem>
  );
};

export default TechStack;
