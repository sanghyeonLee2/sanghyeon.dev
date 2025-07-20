'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ImageComponent from '@/components/common/Image/ImageComponent';
import { StaticImageData } from 'next/image';
import { MotionItem } from '@/components/common/Motion';
import Button from '@/components/common/Button/Button';
import { useModalStore } from '@/store/useModalStore';

const ImageSlider = ({ imgs }: { imgs: StaticImageData[] }) => {
  const { open } = useModalStore();
  return (
    <MotionItem as="div" className="py-3">
      <Swiper
        loop={imgs.length >= 4}
        modules={[Navigation]}
        navigation
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="w-full h-[18.75rem]"
      >
        {imgs.map((img, idx) => (
          <SwiperSlide key={img.src}>
            <Button
              onClick={() => open(img)}
              className="h-full w-full flex-center bg-black/60 dark:bg-gray-800"
            >
              <ImageComponent
                src={img}
                alt={`슬라이드 ${img.src}`}
                className="h-full w-full max-w-full max-h-full border dark:border-gray-500"
                imgClassName="object-contain transition-transform duration-200 hover:scale-110"
                priority={idx < 2}
              />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionItem>
  );
};

export default ImageSlider;
