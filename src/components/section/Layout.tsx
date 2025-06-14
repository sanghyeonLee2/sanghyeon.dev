import React from 'react';
import { SectionId } from '@/constants/section';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  sectionId: SectionId;
}
const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Layout = ({ children, sectionId }: LayoutProps) => {
  return (
    <section id={sectionId} className={`${sectionId !== 'intro' && 'py-20'}`}>
      {sectionId !== 'intro' && (
        <motion.h2
          variants={headingMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="capitalize"
        >
          {sectionId}
        </motion.h2>
      )}
      {children}
    </section>
  );
};

export default Layout;
