'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HTMLTag, MotionItemProps } from './motion.type';

const motionItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const MotionItem = <T extends HTMLTag>({ as, children, ...rest }: MotionItemProps<T>) => {
  const MotionTag = motion[as as keyof typeof motion] as React.ElementType;
  return (
    <MotionTag variants={motionItem} transition={{ duration: 0.6, ease: 'easeOut' }} {...rest}>
      {children}
    </MotionTag>
  );
};
export default MotionItem;
