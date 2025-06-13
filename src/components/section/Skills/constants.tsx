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
import { CoreSkillsType, UsedSkillsType } from '@/components/section/Skills/skills.type';
import { BRAND_COLORS } from '@/constants/colors';

export const CORE_SKILLS: CoreSkillsType[] = [
  {
    icon: SiReact,
    name: 'React',
    color: BRAND_COLORS.react,
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
    color: BRAND_COLORS.typescript,
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
    color: BRAND_COLORS.next,
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
    color: BRAND_COLORS.tailwind,
    description: [
      '유틸리티 클래스를 이용한 빠른 UI 스타일링이 가능합니다.',
      '반응형 디자인 구현에 능숙합니다.',
      '다크모드 및 커스텀 테마 적용 경험이 있습니다.',
      '컴포넌트 단위로 재사용 가능한 스타일을 설계했습니다.',
    ],
  },
];

export const USED_SKILLS: UsedSkillsType[] = [
  { icon: SiGithub, name: 'GitHub', color: BRAND_COLORS.github },
  { icon: SiFigma, name: 'Figma', color: BRAND_COLORS.figma },
  { icon: SiFirebase, name: 'Firebase', color: BRAND_COLORS.firebase },
  { icon: SiVercel, name: 'Vercel', color: BRAND_COLORS.vercel },
  { icon: SiNotion, name: 'Notion', color: BRAND_COLORS.notion },
  { icon: SiPostman, name: 'Postman', color: BRAND_COLORS.postman },
];
