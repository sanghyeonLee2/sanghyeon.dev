import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  className?: string;
  imgClassName?: string;
  alt: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
}

const ImageComponent = ({
  className,
  imgClassName = 'object-cover',
  fill = true,
  ...rest
}: ImageProps) => {
  return (
    <div className={clsx(fill ? 'relative overflow-hidden' : '', className)}>
      <Image
        {...rest}
        fill={fill}
        sizes={fill ? '(max-width: 768px) 100vw, 50vw' : undefined}
        className={imgClassName}
      />
    </div>
  );
};

export default ImageComponent;
