'use client';

import ScrollLink from '@/components/common/Link/ScrollLink';
import React from 'react';
const INTRO_TEXT = 'LEE SANG HYEON PORTFOLIO';
const INTRODUCE = '안녕하세요. 프론트엔드 개발자를 꿈꾸는 이상현 입니다.';

const Intro = () => {
  return (
    <section className="min-h-screen flex-center flex-col">
      <div className="flex-center flex-grow">
        {/* 증명사진 */}
        {/* <Image
          alt="증명사진"
          src="@/assets/IDpicture.jpg"
          className="w-45 h-45 bg-amber-200 rounded-lg"
        /> */}

        {/* 소개 텍스트 */}
        <div className="text-center">
          <h2>{INTRO_TEXT}</h2>
          <p>{INTRODUCE}</p>
        </div>
      </div>
      <ScrollLink text="더 알아보기" href={'about'} className="w-50 my-5" />
    </section>
  );
};

export default Intro;
