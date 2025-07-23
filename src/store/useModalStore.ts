import { create } from 'zustand';
import { StaticImageData } from 'next/image';

interface ImageItem {
  img: StaticImageData;
  title?: string;
  page?: number;
}

interface ModalState {
  images: ImageItem[];
  index: number;
  open: (images: ImageItem[], index?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  images: [],
  index: 0,
  open: (images, index = 0) => set({ images, index }),
  close: () => set({ images: [], index: 0 }),
  next: () => {
    const { index, images } = get();
    set({ index: (index + 1) % images.length });
  },
  prev: () => {
    const { index, images } = get();
    const finalIndex = index - 1 === -1 ? images.length - 1 : index - 1;
    set({ index: finalIndex % images.length });
  },
}));
