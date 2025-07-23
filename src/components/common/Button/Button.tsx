'use client';

import clsx from 'clsx';
import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button = ({ children, text, className, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button type={type} className={clsx('transition', className)} {...rest}>
      {children}
      {text}
    </button>
  );
};

export default Button;
