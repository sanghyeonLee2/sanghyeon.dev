'use client';

import { MotionContainer } from '@/components/common/Motion';
import React from 'react';
import MotionItem from '../../common/Motion/MotionItem';
import Subheading from '@/components/common/Subheading/Subheading';

const THANKS_CONTENTS: { subheading: string; text: string } = {
  subheading: '끝까지 봐주셔서 감사합니다 😊',
  text: '제 포트폴리오를 봐주셔서 정말 감사합니다. 더 궁금하신 점이나 협업 제안이 있으시다면 언제든지 편하게 연락주세요!',
};
const Thanks = () => {
  return (
    <MotionContainer as="div">
      <Subheading text={THANKS_CONTENTS.subheading} />
      <MotionItem as="p">{THANKS_CONTENTS.text}</MotionItem>
    </MotionContainer>
  );
};

export default Thanks;
