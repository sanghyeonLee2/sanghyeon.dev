'use client';

import ALink from '@/components/common/Link/ALink';
import React from 'react';
const INTRO_TEXT = 'LEE SANG HYEON PORTFOLIO';
const INTRODUCE = '안녕하세요. 프론트엔드 개발자를 꿈꾸는 이상현 입니다.';

const Intro = () => {
  return (
    <section id="intro" className="min-h-screen flex-center flex-col">
      <div className="flex-center flex-1">
        <div className="text-center">
          <h2>{INTRO_TEXT}</h2>
          <p>{INTRODUCE}</p>
        </div>
      </div>
      <ALink text="더 알아보기" href={'#about'} className="my-5 font-extrabold font-cafe" />
    </section>
  );
};

export default Intro;
