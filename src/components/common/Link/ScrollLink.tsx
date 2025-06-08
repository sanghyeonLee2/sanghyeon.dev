import React from 'react';
import { SectionId } from '@/constants/section';
import clsx from 'clsx';

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: SectionId;
}

const ScrollLink = ({ text, href, className, ...rest }: ScrollLinkProps) => {
  return (
    <a href={`#${href}`} {...rest} className={clsx('text-center', className)}>
      {text}
    </a>
  );
};

export default ScrollLink;
