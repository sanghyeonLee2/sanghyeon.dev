import ALink from '@/components/common/Link/ALink';
import React from 'react';
import { LinkType } from '@/common/types';
import { BLANK_LINK } from '@/constants/common';

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
            {...option}
            {...BLANK_LINK}
            onClick={(e) => e.stopPropagation()}
          />
        </li>
      ))}
    </ul>
  );
};

export default LinkOptions;
