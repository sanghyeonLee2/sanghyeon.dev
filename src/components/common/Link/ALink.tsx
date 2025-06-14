import React from 'react';
import { LinkType } from '@/common/types';

const ALink = ({ text, icon, ...rest }: LinkType) => {
  return (
    <a {...rest}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default ALink;
