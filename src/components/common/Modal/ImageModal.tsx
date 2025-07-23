'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from '@/components/common/Image/ImageComponent';
import { useModalStore } from '@/store/useModalStore';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useEffect } from 'react';
import Button from '@/components/common/Button/Button';
import useModalEffect from '@/hooks/useModalEffect';

export default function ImageModal() {
  const { images, index, close, next, prev } = useModalStore();
  const selected = images[index];
  useModalEffect(!!selected);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, close]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 px-4 py-5"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-screen flex-center"
          >
            <Button
              onClick={close}
              className="absolute top-0 right-0 bg-white/80 hover:bg-white text-black p-1 rounded-full shadow"
            >
              <IoClose className="w-9 h-9 md:w-12 md:h-12" />
            </Button>

            {images.length > 1 && (
              <Button
                onClick={prev}
                className="absolute bottom-7 md:bottom-auto left-1/4 md:left-0 md:top-1/2 md:-translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                <IoChevronBack className="w-10 h-10" />
              </Button>
            )}
            {images.length > 1 && (
              <Button
                onClick={next}
                className="absolute bottom-7 md:bottom-auto right-1/4 md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                <IoChevronForward className="w-10 h-10" />
              </Button>
            )}
            {(selected.title || selected.page) && (
              <div className="text-white text-center flex-center gap-3 absolute top-0">
                {selected.title && <div className="text-lg font-semibold">{selected.title}</div>}
                {selected.page && (
                  <div className="text-sm opacity-70">
                    {selected.page} / {images.length}
                  </div>
                )}
              </div>
            )}
            <ImageComponent
              src={selected.img}
              alt={selected.title ?? '확대 이미지'}
              width={800}
              height={480}
              fill={false}
              className="max-w-[43rem]"
              imgClassName="object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
