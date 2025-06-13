'use client';

import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, text, className, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx('button-hover transition', className)}
        {...rest}
      >
        {children}
        {text}
      </button>
    );
  },
);

export default Button;
