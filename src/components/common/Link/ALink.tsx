import React from 'react';

import { LinkType } from '@/types/ui';

const ALink = ({ text, icon, ...rest }: LinkType) => {
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default ALink;
