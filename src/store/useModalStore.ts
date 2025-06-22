import { create } from 'zustand';
import { StaticImageData } from 'next/image';

interface ModalState {
  selectedImg: StaticImageData | null;
  open: (img: StaticImageData) => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  selectedImg: null,
  open: (img) => set({ selectedImg: img }),
  close: () => set({ selectedImg: null }),
}));
