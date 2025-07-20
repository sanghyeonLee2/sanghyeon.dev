'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from '@/components/common/Image/ImageComponent';
import { useModalStore } from '@/store/useModalStore';
import { useModalAutoClose } from '@/hooks/useModalAutoClose';

export default function ImageModal() {
  const { selectedImg, close } = useModalStore();
  useModalAutoClose(close);

  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 p-4 flex-center"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageComponent
              src={selectedImg}
              alt="확대 이미지"
              width={800}
              height={480}
              fill={false}
              className="max-w-full"
              imgClassName="object-contain max-h-screen"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
