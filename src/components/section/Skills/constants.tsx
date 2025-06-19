import {
  SiRecoil,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiNotion,
  SiMysql,
  SiSequelize,
  SiFlask,
  SiPython,
  SiC,
  SiHuggingface,
  SiNodedotjs,
  SiPytorch,
  SiEsbuild,
  SiSelenium,
  SiGit,
  SiExpress,
  SiReactquery,
  SiReacthookform,
  SiStyledcomponents,
  SiAxios,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import zustandImg from '@/assets/zustand.svg';
import beautifulSoupImg from '@/assets/beautifulSoup.png';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { FaAws } from 'react-icons/fa';
import { SkillType } from './skills.type';
import ImageComponent from '@/components/common/Image/ImageComponent';

const CORE_ICON_CLASS: string = 'w-10 h-10 sm:w-12 sm:h-12';
const USED_ICON_CLASS: string = 'w-9 h-9 sm:w-10.5 sm:h-10.5';

export const CORE_SKILL: SkillType = {
  subheading: '💡 Core Tech Stack',
  skills: [
    {
      text: 'React',
      icon: <SiReact className={CORE_ICON_CLASS} style={{ color: 'var(--react)' }} />,
      descriptions: [
        'react.memo, useCallback, useMemo를 통한 성능 최적화 경험이 있습니다.',
        'Hooks를 활용한 상태 관리 경험이 있습니다.',
        'React Router를 사용한 SPA 구현 경험이 있습니다.',
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
    {
      text: 'Recoil',
      icon: <SiRecoil className={CORE_ICON_CLASS} style={{ color: 'var(--recoil)' }} />,
      descriptions: [
        '전역 상태 관리를 위해 Atom과 Selector를 적절히 활용했습니다.',
        '동기적/비동기적 상태 흐름에 대한 이해를 바탕으로 구조화된 상태 관리 경험이 있습니다.',
        '컴포넌트 재사용성과 상태 추적성을 높이는 데 기여했습니다.',
      ],
    },
    {
      text: 'GitHub',
      icon: <SiGithub className={CORE_ICON_CLASS} style={{ color: 'var(--github)' }} />,
      descriptions: [
        '일관된 커밋 메시지와 브랜치 전략을 수립하여 협업에 기여했습니다.',
        'Pull Request를 활용한 코드 리뷰 및 병합 경험이 있습니다.',
        'Issue, Projects 기능을 통해 작업 관리를 체계적으로 수행했습니다.',
      ],
    },
    {
      text: 'JavaScript',
      icon: <IoLogoJavascript className={CORE_ICON_CLASS} style={{ color: 'var(--javascript)' }} />,
      descriptions: [
        'ES6+ 문법에 능숙하며, 비동기 처리(Async/Await, Promise)에 익숙합니다.',
        '배열, 객체 조작과 고차함수(map, filter 등) 사용에 익숙합니다.',
        'DOM 조작 및 이벤트 처리, 브라우저 환경에 대한 이해가 있습니다.',
      ],
    },
    {
      text: 'React Query',
      icon: <SiReactquery className={CORE_ICON_CLASS} style={{ color: 'var(--react-query)' }} />,
      descriptions: [
        '서버 상태 관리 및 캐싱을 통해 사용자 경험을 개선했습니다.',
        '자동 리패칭, 쿼리 무효화, 에러 핸들링 등 다양한 기능을 적극 활용했습니다.',
        'Suspense 및 옵셔널 쿼리 전략을 통해 UX를 유연하게 제어했습니다.',
      ],
    },
    {
      text: 'React Hook Form',
      icon: (
        <SiReacthookform className={CORE_ICON_CLASS} style={{ color: 'var(--react-hook-form)' }} />
      ),
      descriptions: [
        '폼 상태 관리를 간결하게 처리하고 유효성 검사를 적용한 경험이 있습니다.',
        'Yup과 연계한 스키마 기반 유효성 검사를 구현했습니다.',
        '비동기 검증과 동적 필드 처리에도 익숙합니다.',
      ],
    },
    {
      text: 'Axios',
      icon: <SiAxios className={CORE_ICON_CLASS} style={{ color: 'var(--axios)' }} />,
      descriptions: [
        'RESTful API와 통신 시 Axios를 통해 요청/응답 처리를 수행했습니다.',
        '인터셉터를 활용한 공통 헤더 설정, 에러 처리, 토큰 갱신 경험이 있습니다.',
        '비동기 로직 흐름과 예외 처리를 구조적으로 관리했습니다.',
      ],
    },
  ],
};

export const USED_SKILL: SkillType = {
  subheading: '🧪 Other Tools I’ve Used',
  skills: [
    {
      text: 'Styled Components',
      icon: (
        <SiStyledcomponents
          className={USED_ICON_CLASS}
          style={{ color: 'var(--styled-components)' }}
        />
      ),
    },
    {
      text: 'AWS',
      icon: <FaAws className={USED_ICON_CLASS} style={{ color: 'var(--aws)' }} />,
    },
    {
      text: 'Vercel',
      icon: <SiVercel className={USED_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
    },
    {
      text: 'Zustand',
      icon: <ImageComponent className={USED_ICON_CLASS} src={zustandImg} alt="zustand" />,
    },
    {
      text: 'Git',
      icon: <SiGit className={USED_ICON_CLASS} style={{ color: 'var(--git)' }} />,
    },
    {
      text: 'Notion',
      icon: <SiNotion className={USED_ICON_CLASS} style={{ color: 'var(--notion)' }} />,
    },
    {
      text: 'esbuild',
      icon: <SiEsbuild className={USED_ICON_CLASS} style={{ color: 'var(--esbuild)' }} />,
    },
    {
      text: 'Node.js',
      icon: <SiNodedotjs className={USED_ICON_CLASS} style={{ color: 'var(--node)' }} />,
    },
    {
      text: 'React Native',
      icon: <SiReact className={USED_ICON_CLASS} style={{ color: 'var(--react-native)' }} />,
    },
    {
      text: 'Express',
      icon: <SiExpress className={USED_ICON_CLASS} style={{ color: 'var(--express)' }} />,
    },
    {
      text: 'Sequelize',
      icon: <SiSequelize className={USED_ICON_CLASS} style={{ color: 'var(--sequelize)' }} />,
    },
    {
      text: 'Chrome Extension',
      icon: (
        <IoExtensionPuzzle
          className={USED_ICON_CLASS}
          style={{ color: 'var(--chrome-extension)' }}
        />
      ),
    },
    {
      text: 'MySQL',
      icon: <SiMysql className={USED_ICON_CLASS} style={{ color: 'var(--mysql)' }} />,
    },
    {
      text: 'Python',
      icon: <SiPython className={USED_ICON_CLASS} style={{ color: 'var(--python)' }} />,
    },
    {
      text: 'Flask',
      icon: <SiFlask className={USED_ICON_CLASS} style={{ color: 'var(--flask)' }} />,
    },

    {
      text: 'C',
      icon: <SiC className={USED_ICON_CLASS} style={{ color: 'var(--c)' }} />,
    },
    {
      text: 'PyTorch',
      icon: <SiPytorch className={USED_ICON_CLASS} style={{ color: 'var(--pytorch)' }} />,
    },
    {
      text: 'Hugging Face',
      icon: <SiHuggingface className={USED_ICON_CLASS} style={{ color: 'var(--huggingface)' }} />,
    },

    {
      text: 'BeautifulSoup',
      icon: (
        <ImageComponent
          className="w-full h-full object-contain"
          src={beautifulSoupImg}
          alt="beautifulSoup"
        />
      ),
    },
    {
      text: 'Selenium',
      icon: <SiSelenium className={USED_ICON_CLASS} style={{ color: 'var(--selenium)' }} />,
    },
  ],
};
