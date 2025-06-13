'use client';

import React, { forwardRef } from 'react';
import SectionNav from '@/components/ui/SectionNav';
import clsx from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

const DropdownList = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={clsx('p-content', className)}
        {...props}
      >
        <SectionNav className="flex-center flex-col gap-2" />
      </motion.div>
    );
  },
);

DropdownList.displayName = 'DropdownList';
export default DropdownList;
