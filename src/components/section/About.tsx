'use client';

import ImageComponent from '@/components/common/Image/ImageComponent';
import React from 'react';
import example from '@/assets/example.png';
import ALink from '@/components/common/Link/ALink';
import { MotionContainer, MotionItem } from '@/components/common/motion';
import { BLANK_LINK } from '@/constants/dom';
import { PROFILE_OPTIONS } from '@/constants/section';

const INTRODUCE =
  '맨땅에 헤딩하듯 시작한 첫 개발 경험부터 반복작업 속 효율성을 고민한 프로젝트 경험까지, 저는 끈질기게 몰입하며 성장해왔습니다. 다양한 프로젝트를 통해 프론트엔드뿐 아니라 백엔드, 크롤링, AI 모델 개발까지 폭넓게 경험했으며, 단순한 구현을 넘어 재사용성과 유지보수성을 고려한 구조적인 개발을 지향하고 있습니다.';

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
