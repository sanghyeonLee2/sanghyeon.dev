'use client';

import React from 'react';
import { MotionContainer, MotionItem } from '@/components/common/motion';

const INTRO_TEXT = 'LEE SANG HYEON PORTFOLIO';
const INTRODUCE = '안녕하세요. 프론트엔드 개발자를 꿈꾸는 이상현 입니다.';

const Intro = () => {
  return (
    <MotionContainer as="div" className="min-h-screen flex-center flex-col">
      <div className="flex-center flex-1">
        <div className="text-center">
          <MotionItem as="h2" className="text-4xl font-extrabold tracking-[0.05em] mb-3">
            {INTRO_TEXT}
          </MotionItem>
          <MotionItem as="p" className="text-lg font-semibold">
            {INTRODUCE}
          </MotionItem>
        </div>
      </div>
      <MotionItem as="a" href={'#about'} className="my-6 text-[1.1rem] font-extrabold font-cafe">
        더 알아보기
      </MotionItem>
    </MotionContainer>
  );
};

export default Intro;
