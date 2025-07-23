'use client';
import { MotionItem } from '@/components/common/Motion';
import React from 'react';

const TechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <MotionItem as="div" className="flex gap-2 flex-wrap pt-3 pb-5">
      {techStack.map((tech) => (
        <span
          key={tech}
          style={{ backgroundColor: `var(--${tech})`, color: `var(--${tech}-text)` }}
          className={`shadow-[var(--shadow)] dark:border-gray-600 border border-transparent font-medium text-[0.75rem] md:text-sm px-2 py-0.5 rounded`}
        >
          {tech}
        </span>
      ))}
    </MotionItem>
  );
};

export default TechStack;
