'use client';

import React from 'react';
import { MotionContainer, MotionItem } from '@/components/common/motion';
import introImg from '@/assets/introImg.jpg';
import { useNextTheme } from '@/hooks/useNextTheme';
const INTRO_TEXT = 'LEE SANG HYEON PORTFOLIO';
const INTRODUCE = '안녕하세요. 프론트엔드 개발자를 꿈꾸는 이상현 입니다.';
import { FaRegCircleDown } from 'react-icons/fa6';
import ALink from '@/components/common/Link/ALink';

const Intro = () => {
  const { currentTheme } = useNextTheme();
  return (
    <MotionContainer
      key={currentTheme}
      style={{
        backgroundImage: `var(--intro-bg),url(${introImg.src})`,
      }}
      as="div"
      className="p-content animate-fade-in relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-cover bg-center min-h-[55vh] flex-center"
    >
      <div className="absolute -bottom-1 left-0 bg-gradient-to-b from-transparent to-[var(--color-bg)] right-0 h-50 pointer-events-none z-10" />
      <div className="flex-center">
        <div className="text-center">
          <MotionItem as="h1" className="mb-3">
            {INTRO_TEXT}
          </MotionItem>
          <MotionItem as="p" className="text-black break-keep dark:text-[var(--color-text)]">
            {INTRODUCE}
          </MotionItem>
        </div>
      </div>
      <ALink
        icon={
          <FaRegCircleDown className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[1.6rem] z-20" />
        }
        href="#about"
      />
    </MotionContainer>
  );
};

export default Intro;
