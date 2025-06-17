'use client';

import React from 'react';
import clsx from 'clsx';
import ALink from '@/components/common/Link/ALink';
import { useActiveSectionNav } from '@/hooks/useActiveSectionNav';
import { SECTIONS } from '@/constants/section';

const SectionNav = ({ className }: { className?: string }) => {
  const activeId = useActiveSectionNav();

  return (
    <nav>
      <ul className={className}>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <ALink
              className={clsx(
                'font-extrabold text-[1.1rem]',
                activeId === id && 'text-[var(--color-primary)]',
              )}
              text={label}
              href={`#${id}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNav;
