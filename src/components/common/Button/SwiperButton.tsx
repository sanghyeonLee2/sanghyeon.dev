import Button from '@/components/common/Button/Button';
import clsx from 'clsx';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const SwiperButton = ({
  prevOrNext,
  sizeClassName,
}: {
  prevOrNext: 'prev' | 'next';
  sizeClassName: string;
}) => {
  return (
    <Button
      className={clsx(
        'cursor-pointer absolute top-1/2 z-10 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition',
        prevOrNext === 'prev'
          ? 'swiper-button-prev-custom left-2'
          : 'swiper-button-next-custom right-2',
      )}
    >
      {prevOrNext === 'prev' && <BiChevronLeft className={sizeClassName} />}
      {prevOrNext === 'next' && <BiChevronRight className={sizeClassName} />}
    </Button>
  );
};

export default SwiperButton;
