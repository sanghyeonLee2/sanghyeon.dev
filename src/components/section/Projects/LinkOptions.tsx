import ALink from '@/components/common/Link/ALink';
import React from 'react';
import { BLANK_LINK } from '@/constants/dom';
import Subheading from '@/components/common/Text/Subheading';
import { LinkOptionsType } from '@/components/section/Projects/projects.type';
import { MotionItem } from '@/components/common/Motion';

const LinkOptions = ({ linksOption }: { linksOption: LinkOptionsType }) => {
  return (
    <div className="mt-8">
      <Subheading text={linksOption.subheading} />
      <MotionItem as="ul" className="grid grid-cols-3 gap-2.5">
        {linksOption.contents.map((option) => (
          <li
            key={option.href}
            className="shadow-[var(--shadow)] w-full rounded border-[0.05rem] border-gray-300 dark:border-transparent bg-[var(--color-btn-bg)] hover:bg-[var(--color-primary)]/70 transition-colors duration-300"
          >
            <ALink
              className="gap-2.5 font-semibold text-sm sm:text-base flex-center text-inherit py-3 px-1"
              {...option}
              {...BLANK_LINK}
              onClick={(e) => e.stopPropagation()}
            />
          </li>
        ))}
      </MotionItem>
    </div>
  );
};

export default LinkOptions;
