'use client';

import AboutSection from '@/components/section/About/AboutSection';
import Experience from '@/components/section/Experience/ExperienceSection';
import Intro from '@/components/section/Intro';
import Layout from '@/components/section/Layout';
import ProjectsSection from '@/components/section/Projects/ProjectsSection';
import SkillsSection from '@/components/section/Skills/SkillsSection';
import { SectionId } from '@/constants/section';

const sections: { id: SectionId; Component: React.FC }[] = [
  { id: 'about', Component: AboutSection },
  { id: 'projects', Component: ProjectsSection },
  { id: 'skills', Component: SkillsSection },
  { id: 'experience', Component: Experience },
];
export default function Home() {
  return (
    <main className="flex-1 layout-wrap-max-w w-full px-content mx-auto mb-20">
      <Intro />
      {sections.map(({ id, Component }) => (
        <Layout key={id} sectionId={id}>
          <Component />
        </Layout>
      ))}
    </main>
  );
}
