import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiNotion,
} from 'react-icons/si';
import { SkillType } from './skills.type';

const CORE_ICON_CLASS: string = 'w-10 h-10 sm:w-12 sm:h-12';
const USED_ICON_CLASS: string = 'w-9 h-9 sm:w-10.5 sm:h-10.5';

export const CORE_SKILL: SkillType = {
  subheading: '💡 Core Tech Stack',
  skills: [
    {
      text: 'React',
      icon: <SiReact className={CORE_ICON_CLASS} style={{ color: 'var(--react)' }} />,
      descriptions: [
        '컴포넌트 기반 UI 설계에 익숙합니다.',
        'Hooks를 활용한 상태 관리 경험이 있습니다.',
        'React Router를 사용한 SPA 구현 경험이 있습니다.',
        'React Query로 데이터 패칭 최적화를 수행했습니다.',
      ],
    },
    {
      text: 'TypeScript',
      icon: <SiTypescript className={CORE_ICON_CLASS} style={{ color: 'var(--typescript)' }} />,
      descriptions: [
        '정적 타입 정의로 코드 안정성을 높였습니다.',
        'interface, type을 활용한 구조적 타입 작성 경험이 있습니다.',
        'Generics와 유틸리티 타입 사용에 익숙합니다.',
        'React와 함께 사용하는 타입 정의에 능숙합니다.',
      ],
    },
    {
      text: 'Next.js',
      icon: <SiNextdotjs className={CORE_ICON_CLASS} style={{ color: 'var(--next)' }} />,
      descriptions: [
        'SSR, SSG, ISR 등 다양한 렌더링 방식에 익숙합니다.',
        'API Routes를 활용한 서버리스 함수 작성 경험이 있습니다.',
        'App Router와 Page Router 구조 모두 경험했습니다.',
        'Metadata 설정, 동적 라우팅 구현 경험이 있습니다.',
      ],
    },
    {
      text: 'Tailwind CSS',
      icon: <SiTailwindcss className={CORE_ICON_CLASS} style={{ color: 'var(--tailwind)' }} />,
      descriptions: [
        '유틸리티 클래스를 이용한 빠른 UI 스타일링이 가능합니다.',
        '반응형 디자인 구현에 능숙합니다.',
        '다크모드 및 커스텀 테마 적용 경험이 있습니다.',
        '컴포넌트 단위로 재사용 가능한 스타일을 설계했습니다.',
      ],
    },
  ],
};

export const USED_SKILL: SkillType = {
  subheading: '🧪 Other Tools I’ve Used',
  skills: [
    {
      text: 'GitHub',
      icon: <SiGithub className={USED_ICON_CLASS} style={{ color: 'var(--github)' }} />,
    },
    {
      text: 'Vercel',
      icon: <SiVercel className={USED_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
    },
    {
      text: 'Notion',
      icon: <SiNotion className={USED_ICON_CLASS} style={{ color: 'var(--notion)' }} />,
    },
  ],
};
