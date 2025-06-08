'use client';

import React from 'react';
import { SECTIONS } from '@/constants/section';
import ScrollLink from '@/components/common/Link/ScrollLink';

const SectionNav = () => {
  return (
    <nav>
      <ul className="flex-center-between gap-3 px-2">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <ScrollLink text={label} href={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNav;
