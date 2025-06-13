import ALink from '@/components/common/Link/ALink';
import { LinkType } from '@/types/ui';
import React from 'react';

const LinkOptions = ({ linksOptions }: { linksOptions: LinkType[] }) => {
  return (
    <ul className="flex gap-2">
      {linksOptions.map((option) => (
        <li
          key={option.href}
          className="hover:bg-[var(--color-primary)] dark:hover-opacity rounded bg-[var(--color-btn-bg)] "
        >
          <ALink
            className="flex-col gap-1 flex-center font-light text-[0.75rem] hover:text-white py-1.5 px-3"
            icon={option.icon}
            href={option.href}
            text={option.text}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          />
        </li>
      ))}
    </ul>
  );
};

export default LinkOptions;
