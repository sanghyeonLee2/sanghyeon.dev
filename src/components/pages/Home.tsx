'use client';

import About from '@/components/section/About/About';
import Experience from '@/components/section/Experience/Experience';
import Intro from '@/components/section/Intro';
import Layout from '@/components/section/Layout';
import Projects from '@/components/section/Projects/Projects';
import Skills from '@/components/section/Skills/Skills';

const sections: { id: string; Component: React.FC }[] = [
  { id: 'intro', Component: Intro },
  { id: 'about', Component: About },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
  { id: 'experience', Component: Experience },
];
export default function Home() {
  return (
    <main className="flex-1 layout-wrap-max-w w-full px-content mx-auto mb-20 z-40">
      {sections.map(({ id, Component }) => (
        <Layout key={id} sectionId={id}>
          <Component />
        </Layout>
      ))}
    </main>
  );
}
