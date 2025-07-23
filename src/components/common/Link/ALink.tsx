'use client';
import React from 'react';
import { LinkType } from '@/types/types';

const ALink = ({ text, icon, ...rest }: LinkType) => {
  return (
    <a {...rest}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default ALink;
