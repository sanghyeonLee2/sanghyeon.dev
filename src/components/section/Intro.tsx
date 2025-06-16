'use client';

import React from 'react';
import { MotionContainer, MotionItem } from '@/components/common/motion';
import introImg from '@/assets/introImg.jpg';
const INTRO_TEXT = 'LEE SANG HYEON PORTFOLIO';
const INTRODUCE = '안녕하세요. 프론트엔드 개발자를 꿈꾸는 이상현 입니다.';

const Intro = () => {
  // dark: linear-gradient(180deg, rgba(248, 249, 250, 0.95) 0%, rgba(248, 249, 250, 0.8) 100%)
  // light:linear-gradient(180deg, rgba(26, 31, 40, 0.9) 0%, rgba(26, 31, 40, 0.7)
  return (
    <MotionContainer
      style={{
        backgroundImage: `var(--intro-bg),url(${introImg.src})`,
      }}
      as="div"
      className="transition-opacity duration-700 opacity-100 relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-cover bg-center min-h-[50vh] flex-center flex-col"
    >
      <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none z-10" />
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
      {/* <MotionItem as="a" href={'#about'} className="my-6 text-[1.1rem] font-extrabold font-cafe">
        더 알아보기
      </MotionItem> */}
    </MotionContainer>
  );
};

export default Intro;
