import React from 'react';
import { MotionItem } from '@/components/common/Motion';

const Subheading = ({ text }: { text: string }) => {
  return (
    <MotionItem as="p" className="text-[1.4rem] md:text-2xl font-extrabold pb-5">
      {text}
    </MotionItem>
  );
};

export default Subheading;
