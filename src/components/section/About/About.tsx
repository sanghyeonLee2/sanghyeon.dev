'use client';

import ImageComponent from '@/components/common/Image/ImageComponent';
import React from 'react';
import example from '@/assets/example.png';
import { INTRODUCE, PROFILE_OPTIONS } from './constants';
import ALink from '@/components/common/Link/ALink';
import { MotionContainer, MotionItem } from '@/components/common/motion';
import { BLANK_LINK } from '@/constants/common';

const About = () => {
  return (
    <MotionContainer as="div">
      <MotionItem as="div" className="w-full flex flex-col sm:flex-row items-center gap-10 mb-8">
        <ImageComponent
          src={example}
          alt="증명사진"
          className="w-60 h-60 flex-shrink-0 rounded-3xl"
        />
        <div className="flex-1 flex flex-col text-center sm:text-left gap-3">
          <p className="font-extrabold text-3xl">이상현</p>
          <p className="font-bold text-xl">1999.02.10</p>
          {PROFILE_OPTIONS.map((option) => (
            <div key={option.href}>
              <ALink className="flex items-center gap-3" {...BLANK_LINK} {...option} />
            </div>
          ))}
        </div>
      </MotionItem>
      <MotionItem as="p" className="leading-relaxed">
        {INTRODUCE}
      </MotionItem>
    </MotionContainer>
  );
};

export default About;
