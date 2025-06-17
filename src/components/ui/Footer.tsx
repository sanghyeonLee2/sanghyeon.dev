'use client';

import ALink from '@/components/common/Link/ALink';
import { BLANK_LINK } from '@/constants/dom';
import { SITE_METADATA } from '@/constants/metaData';
import { PROFILE_OPTIONS } from '@/constants/section';

export default function Footer() {
  return (
    <footer className="layout-wrap-max-w flex items-center justify-between w-full h-18 p-content">
      <span className="text-[0.75rem] sm:text-sm">{SITE_METADATA.COPY_RIGHT}</span>
      <ul className="sm:flex gap-3 hidden">
        {PROFILE_OPTIONS.map(({ href, icon }) => (
          <li key={href}>
            <ALink href={href} icon={icon} {...BLANK_LINK} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
