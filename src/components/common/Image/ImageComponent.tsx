import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  className?: string;
  alt: string;
  priority?: boolean;
}
const ImageComponent = ({ src, className, alt, priority = false }: ImageProps) => {
  return (
    <div className={clsx('relative overflow-hidden ', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
};

export default ImageComponent;
