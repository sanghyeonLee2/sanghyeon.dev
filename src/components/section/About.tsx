'use client';

import ImageComponent from '@/components/common/Image/ImageComponent';
import React from 'react';
import example from '@/assets/example.png';
import ALink from '@/components/common/Link/ALink';
import { MotionContainer, MotionItem } from '@/components/common/motion';
import { BLANK_LINK } from '@/constants/dom';
import { PROFILE_OPTIONS } from '@/constants/section';

const INTRODUCE: string =
  '안녕하세요, 사용자 경험을 중요하게 생각하는 프론트엔드 개발자 이상현입니다. React, Next.js,Tailwind CSS를 중심으로 구조적이고 유지보수 가능한 UI 개발에 강점을 가지고 있으며, 최근에는성능 최적화와 다크모드/반응형 UI 구현에 집중하고 있습니다. 협업과 커뮤니케이션을 중시하며,함께 성장하는 개발자를 지향합니다.';

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
