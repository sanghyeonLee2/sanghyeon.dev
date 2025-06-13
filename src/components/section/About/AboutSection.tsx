'use client';

import ImageComponent from '@/components/common/Image/ImageComponent';
import React from 'react';
import example from '@/assets/example.png';
import { INTRODUCE, PROFILE_OPTIONS } from './constants';
import ALink from '@/components/common/Link/ALink';
import { MdEmail } from 'react-icons/md';

const AboutSection = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center gap-10 mb-8">
        <ImageComponent
          src={example}
          alt="증명사진"
          className="bg-amber-400 w-60 h-60 flex-shrink-0 rounded-3xl"
        />
        <div className="flex-1 flex flex-col text-center sm:text-left gap-3">
          <p className="font-extrabold text-3xl">이상현</p>
          <p className="font-bold text-xl">1999.02.10</p>
          <ALink
            className={'flex items-center gap-3'}
            target="_blank"
            rel="noopener noreferrer"
            href={'mailto:hyeon012366@gmail.com'}
            text={'hyeon012366@gmail.com'}
            icon={<MdEmail className="text-2xl" />}
          />
          {PROFILE_OPTIONS.map((option) => (
            <ALink
              className={'flex items-center gap-3'}
              target="_blank"
              rel="noopener noreferrer"
              href={option.href}
              key={option.href}
              text={option.text}
              icon={option.icon}
            />
          ))}
        </div>
      </div>
      <p>{INTRODUCE}</p>
    </>
  );
};

export default AboutSection;
