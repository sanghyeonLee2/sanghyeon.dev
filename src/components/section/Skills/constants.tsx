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
        '커스텀 훅을 활용한 로직 분리와 기능·도메인 중심의 디렉토리 구성으로, 재사용성과 유지보수성을 고려한 구조 설계에 익숙합니다.',
        'react.memo, useCallback, useMemo를 통한 렌더링 최적화 경험이 있습니다.',
        'react-router-dom을 활용해 유저, 사장님, 인증 페이지 등 역할 기반 접근 제어 및 중첩 라우팅을 구현한 경험이 있습니다.',
        'React 생명주기에 대한 이해를 바탕으로, useEffect 등을 활용해 사이드 이펙트를 안정적으로 관리한 경험이 있습니다',
        'react-error-boundary를 사용해 예외 상황에 따라 Fallback UI 또는 Toast 메시지를  에러 처리 로직을 구현했습니다.',
      ],
    },
    {
      text: 'TypeScript',
      icon: <SiTypescript className={CORE_ICON_CLASS} style={{ color: 'var(--typescript)' }} />,
      descriptions: [
        'interface와 type의 차이를 이해하고, 상황에 맞게 유연하게 선택하여 타입 구조를 설계한 경험이 있습니다.',
        '타입 추론 / 단언 / 추출 등 주요 타입 시스템 개념을 이해하고, 상황에 맞게 유연하게 활용할 수 있습니다.',
        'Generics 및 유틸리티 타입 사용에 익숙합니다.',
      ],
    },
    {
      text: 'Next.js',
      icon: <SiNextdotjs className={CORE_ICON_CLASS} style={{ color: 'var(--next)' }} />,
      descriptions: [
        'SSR, SSG, ISR 렌더링 방식을 이해하고, 상황에 맞게 적용한 경험이 있습니다.',
        'generateStaticParams를 활용해 정적 페이지 생성을 최적화하고, 빌드 시점에 필요한 HTML을 미리 생성하여 성능을 개선한 경험이 있습니다.',
        'App Router 환경에서 SEO와 웹 표준을 고려한 sitemap, robots, OG 이미지, 에러 페이지 구성을 적용한 경험이 있습니다.',
        'next-themes를 활용한 테마 구현 과정에서 클라이언트 하이드레이션 시점과 SSR 간의 렌더링 차이를 이해했습니다.',
      ],
    },
    {
      text: 'Tailwind CSS',
      icon: <SiTailwindcss className={CORE_ICON_CLASS} style={{ color: 'var(--tailwind)' }} />,
      descriptions: [
        '유틸리티 클래스를 이용한 빠른 UI 스타일링이 가능하고 및 반응형 디자인에 익숙합니다.',
        'Next.js 환경에서 Tailwind CSS를 활용한 다크·라이트·시스템 테마 구현 경험이 있습니다.',
        '컴포넌트 단위로 재사용 가능한 스타일을 설계하는데 익숙합니다.',
      ],
    },
    {
      text: 'JavaScript',
      icon: <IoLogoJavascript className={CORE_ICON_CLASS} style={{ color: 'var(--javascript)' }} />,
      descriptions: [
        '이벤트 루프와 비동기 처리 흐름(Async/Await, Promise)에 대한 이해가 있습니다.',
        '번들링 도구를 통해 코드 최적화(Tree Shaking, Code Splitting)에 대한 이해와 적용 경험이 있습니다.',
        '클로저 기반 스코프 동작을 이해하고, 참조 시점을 고려한 안정적인 코드 작성에 익숙합니다.',
      ],
    },
    {
      text: 'React Query',
      icon: <SiReactquery className={CORE_ICON_CLASS} style={{ color: 'var(--react-query)' }} />,
      descriptions: [
        '서버 상태와 캐싱전략(쿼리키 포함)에 대한 이해를 바탕으로, useQuery, useMutation을 활용한 데이터 흐름 관리 경험이 있습니다.',
        'useQuery, useMutation 기반 로직을 커스텀 훅으로 추상화하여, 재사용성과 도메인 중심의 구조 설계에 익숙합니다.',
        '쿼리 무효화, 자동 리패칭, 에러 핸들링, 낙관적 업데이트 등을 활용해 안정적인 데이터 흐름, 사용자 경험을 구현했습니다.',
      ],
    },
    {
      text: 'React Hook Form',
      icon: (
        <SiReacthookform className={CORE_ICON_CLASS} style={{ color: 'var(--react-hook-form)' }} />
      ),
      descriptions: [
        '제어/비제어 컴포넌트의 차이를 이해하고, useForm을 활용해 효율적인 폼 상태 관리를 구현했습니다.',
        'Yup과 연계한 스키마 기반 유효성 검사, Controller, useFieldArray를 이용한 복잡한 폼 구조 처리 경험이 있습니다.',
        'useForm과 useQuery, useMutation 등과 결합한 커스텀 훅으로 추상화하여 분리해 재사용성과 유지보수성을 높였습니다.',
      ],
    },
    {
      text: 'Axios',
      icon: <SiAxios className={CORE_ICON_CLASS} style={{ color: 'var(--axios)' }} />,
      descriptions: [
        'axios.create()를 통해 커스텀 인스턴스를 구성하고, 기능 또는 도메인별로 API 요청 로직을 분리해 유지보수성을 높였습니다.',
        '인터셉터를 활용한 JWT 관련 인증 흐름에서 공통 헤더 설정, 토큰 갱신을 처리한 경험이 있습니다.',
      ],
    },
    {
      text: 'Recoil',
      icon: <SiRecoil className={CORE_ICON_CLASS} style={{ color: 'var(--recoil)' }} />,
      descriptions: [
        'Atom의 구독 기반 구조와 Selector의 파생 상태 흐름을 이해하고, 이를 통해 구조적인 상태 관리를 구현했습니다.',
        'Selector를 활용해 Atom 상태로부터 파생된 비동기 데이터를 관리하고, 외부 API와 연동한 경험이 있습니다.',
      ],
    },
    {
      text: 'GitHub',
      icon: <SiGithub className={CORE_ICON_CLASS} style={{ color: 'var(--github)' }} />,
      descriptions: [
        '일관된 커밋 메시지와 브랜치 전략을 수립해 협업을 주도한 경험이 있습니다.',
        'Issue와 Pull Request 기반의 코드 리뷰 및 병합 과정을 통해 협업 효율을 높였습니다.',
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
      text: 'Git',
      icon: <SiGit className={USED_ICON_CLASS} style={{ color: 'var(--git)' }} />,
    },
    {
      text: 'Notion',
      icon: <SiNotion className={USED_ICON_CLASS} style={{ color: 'var(--notion)' }} />,
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
      text: 'C',
      icon: <SiC className={USED_ICON_CLASS} style={{ color: 'var(--c)' }} />,
    },
    // {
    //   text: 'PyTorch',
    //   icon: <SiPytorch className={USED_ICON_CLASS} style={{ color: 'var(--pytorch)' }} />,
    // },
    // {
    //   text: 'Hugging Face',
    //   icon: <SiHuggingface className={USED_ICON_CLASS} style={{ color: 'var(--huggingface)' }} />,
    // },

    // {
    //   text: 'BeautifulSoup',
    //   icon: (
    //     <ImageComponent
    //       className="w-full h-full object-contain"
    //       src={beautifulSoupImg}
    //       alt="beautifulSoup"
    //     />
    //   ),
    // },
    // {
    //   text: 'Selenium',
    //   icon: <SiSelenium className={USED_ICON_CLASS} style={{ color: 'var(--selenium)' }} />,
    // },{
    //   text: 'Flask',
    //   icon: <SiFlask className={USED_ICON_CLASS} style={{ color: 'var(--flask)' }} />,
    // },
  ],
};
