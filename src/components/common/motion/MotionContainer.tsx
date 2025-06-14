'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HTMLTag, MotionItemProps } from './motion.type';

const motionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const MotionContainer = <T extends HTMLTag>({
  as,
  amount = 0.3,
  children,
  ...rest
}: MotionItemProps<T>) => {
  const MotionTag = motion[as as keyof typeof motion] as React.ElementType;

  return (
    <MotionTag
      variants={motionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest} // className 등
    >
      {children}
    </MotionTag>
  );
};

export default MotionContainer;
