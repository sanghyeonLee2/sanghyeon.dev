'use client';

import About from '@/components/section/About';
import Experience from '@/components/section/Experience/Experience';
import Intro from '@/components/section/Intro';
import Layout from '@/components/section/Layout';
import Projects from '@/components/section/Projects';
import Skills from '@/components/section/Skills';
import { SectionId } from '@/constants/section';

const sections: { id: SectionId; Component: React.FC }[] = [
  { id: 'about', Component: About },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
  { id: 'experience', Component: Experience },
];
export default function Home() {
  return (
    <main className="flex-grow layout-wrap-max-w w-full px-content mx-auto mb-20">
      <Intro />
      {sections.map(({ id, Component }) => (
        <Layout key={id} sectionId={id}>
          <Component />
        </Layout>
      ))}
    </main>
  );
}
