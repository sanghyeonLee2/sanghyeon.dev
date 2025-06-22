import { StaticImageData } from 'next/image';
import { useCallback, useState } from 'react';

export default function useImgModal() {
  const [selectedImg, setSelectedImg] = useState<StaticImageData | null>(null);

  const onOpen = useCallback((img: StaticImageData) => setSelectedImg(img), []);
  const onClose = useCallback(() => setSelectedImg(null), []);

  return { selectedImg, onOpen, onClose };
}
