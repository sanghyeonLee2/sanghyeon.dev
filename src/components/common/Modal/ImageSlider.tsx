import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ImageComponent from '@/components/common/Image/ImageComponent';
import { StaticImageData } from 'next/image';

const ImageSlider = ({ imgs }: { imgs: StaticImageData[] }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      className="w-full h-70"
    >
      {imgs.map((img) => (
        <SwiperSlide key={img.src}>
          <ImageComponent
            src={img}
            alt={`슬라이드 ${img.src}`}
            className="shadow-[var(--shadow)] rounded-lg h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
