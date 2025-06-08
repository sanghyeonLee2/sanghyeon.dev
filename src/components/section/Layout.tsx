import React from 'react';
import { SectionId } from '@/constants/section';

interface LayoutProps {
  children: React.ReactNode;
  sectionId: SectionId;
}

const Layout = ({ children, sectionId }: LayoutProps) => {
  return (
    <section id={sectionId} className="pt-section">
      <h2 className="capitalize">{sectionId}</h2>
      {children}
    </section>
  );
};

export default Layout;
