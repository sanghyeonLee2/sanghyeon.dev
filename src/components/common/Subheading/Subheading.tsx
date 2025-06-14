import React from 'react';
import { MotionItem } from '@/components/common/motion';

const Subheading = ({ text }: { text: string }) => {
  return (
    <MotionItem as="p" className="text-2xl pb-5">
      {text}
    </MotionItem>
  );
};

export default Subheading;
