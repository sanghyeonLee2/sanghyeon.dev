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
import SwiperButton from '@/components/common/Button/SwiperButton';

const ImageSlider = ({ imgs, title }: { imgs: StaticImageData[]; title: string }) => {
  const { open } = useModalStore();
  return (
    <MotionItem as="div" className="relative py-3">
      <Swiper
        loop={imgs.length >= 4}
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
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
              onClick={() =>
                open(
                  imgs.map((img, i) => ({
                    img,
                    title,
                    page: i + 1,
                  })),
                  idx,
                )
              }
              className="relative h-full w-full overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 blur-2xl brightness-85">
                <ImageComponent
                  src={img}
                  alt={`배경 ${img.src}`}
                  className="h-full w-full"
                  priority={idx < 2}
                />
              </div>
              <ImageComponent
                src={img}
                alt={`슬라이드 ${img.src}`}
                className="h-full w-full max-w-full max-h-full border dark:border-gray-500"
                imgClassName="object-contain transition-transform duration-200 hover:scale-110 z-10"
                priority={idx < 2}
              />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      {imgs.length >= 2 && (
        <>
          <SwiperButton prevOrNext="prev" sizeClassName="w-6 h-6" />
          <SwiperButton prevOrNext="next" sizeClassName="w-6 h-6" />
        </>
      )}
    </MotionItem>
  );
};

export default ImageSlider;
