import Subheading from '@/components/common/Subheading/Subheading';
import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiVercel,
  SiNotion,
  SiPostman,
} from 'react-icons/si';

const CORE_SKILLS = [
  {
    icon: SiReact,
    name: 'React',
    color: '#61DAFB',
    description: [
      '컴포넌트 기반 UI 설계에 익숙합니다.',
      'Hooks를 활용한 상태 관리 경험이 있습니다.',
      'React Router를 사용한 SPA 구현 경험이 있습니다.',
      'React Query로 데이터 패칭 최적화를 수행했습니다.',
    ],
  },
  {
    icon: SiTypescript,
    name: 'TypeScript',
    color: '#3178C6',
    description: [
      '정적 타입 정의로 코드 안정성을 높였습니다.',
      'interface, type을 활용한 구조적 타입 작성 경험이 있습니다.',
      'Generics와 유틸리티 타입 사용에 익숙합니다.',
      'React와 함께 사용하는 타입 정의에 능숙합니다.',
    ],
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    color: '#000000',
    description: [
      'SSR, SSG, ISR 등 다양한 렌더링 방식에 익숙합니다.',
      'API Routes를 활용한 서버리스 함수 작성 경험이 있습니다.',
      'App Router와 Page Router 구조 모두 경험했습니다.',
      'Metadata 설정, 동적 라우팅 구현 경험이 있습니다.',
    ],
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
    color: '#06B6D4',
    description: [
      '유틸리티 클래스를 이용한 빠른 UI 스타일링이 가능합니다.',
      '반응형 디자인 구현에 능숙합니다.',
      '다크모드 및 커스텀 테마 적용 경험이 있습니다.',
      '컴포넌트 단위로 재사용 가능한 스타일을 설계했습니다.',
    ],
  },
];

const USED_SKILLS = [
  { icon: SiGithub, name: 'GitHub', color: '#181717' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiVercel, name: 'Vercel', color: '#000000' },
  { icon: SiNotion, name: 'Notion', color: '#000000' }, // 문서 관리 협업 도구
  { icon: SiPostman, name: 'Postman', color: '#FF6C37' }, // API 테스트 도구
];

const Skills = () => {
  return (
    <>
      <Subheading text={'💡 Core Tech Stack'} />
      <ul className="flex flex-col gap-5 mb-10">
        {CORE_SKILLS.map(({ icon: Icon, name, description, color }) => (
          <li key={name} className="p-content rounded-xl shadow-md bg-white">
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-12 h-12" style={{ color }} />
              <p className="text-2xl">{name}</p>
            </div>
            <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
              {description.map((line) => (
                <li key={line}>
                  <p>{line}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Subheading text={'🧪 Other Tools I’ve Used'} />
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {USED_SKILLS.map(({ icon: Icon, name, color }) => (
          <li
            key={name}
            className="flex-center flex-col p-content rounded-xl shadow-sm bg-white hover:shadow-md transition duration-200"
          >
            <Icon className="w-10 h-10 mb-2" style={{ color }} />
            <span className="text-sm font-medium text-gray-800">{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
