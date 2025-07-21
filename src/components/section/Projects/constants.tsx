import exampleImage from '@/assets/blog-1.png';
import {
  recipickImages,
  portfolioImages,
  coffeeSalesImages,
  godOfDeliveryImages,
  blogReviewCheckerImages,
} from '@/imageModules/projectImages';
import { ProjectsType } from '@/components/section/Projects/projects.type';
import { FaAws, FaGithub } from 'react-icons/fa6';
import { IoLogoVercel } from 'react-icons/io5';
import { FaRegFileAlt, FaYoutube } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
const LINK_ICON_CLASS = 'text-4xl sm:text-[2.75rem]';

export const PROJECT: ProjectsType = {
  subheading: '📝 상세내용',
  contents: [
    {
      title: '레시픽 (Recipick)',
      personnel: '4인 개발 ( FE 1명, BE 1명, AI 1명, 기획 1명)',
      period: '2025-06-27 ~ 2025-07-11',
      imgs: recipickImages,
      techStack: ['react', 'tailwind', 'typescript', 'vercel', 'notion'],
      description:
        'AI를 활용해 유튜브 요리 영상에서 레시피를 추출해 저장하고, 이를 바탕으로 유사 레시피를 추천해주는 React 기반 웹 애플리케이션입니다.\n프론트엔드 전반을 단독 구현하였으며 제 10회 AI·SW융합 해커톤 장려상 수상작입니다.',
      details: [
        'React, Vite 기반 프론트엔드 단독 구현, 전체 페이지 및 상태 흐름 구성',
        '공통 API 요청 흐름을 fetch 래퍼 + 기능별 요청 함수로 추상화해 유지 보수성 향상',
        'React Query v5 기반으로 useQuery, useMutation, invalidateQueries 등을 활용한 API 캐싱 및 비동기 처리',
        '분석 중 상태에 따라 AI 분석 완료 이벤트를 Supabase Realtime (WebSocket)으로 수신하고 오버레이 UI로 피드백 제공',
        'react-toastify, Skeleton, ErrorBoundary 등을 통해 사용자 상태 피드백 및 로딩/에러 처리',
        'react-hook-form + zod 기반으로 로그인/회원가입 시 입력 유효성 검증 및 에러 포커싱 처리',
        'GitHub Actions 기반 CI/CD 구성, main 브랜치 push 시 자동 배포 -> GitHubPages로 정적 배포',
        'TypeScript로 전역 타입 정의 및 API 응답 타입 분리, zod와의 연계를 통해 런타임 검증 처리',
      ],

      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/dn-recipick.github.io',
          },
          {
            text: '배포',
            icon: <VscGithub className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://dn-recipick.github.io',
          },
          {
            text: '영상',
            icon: <FaYoutube className={LINK_ICON_CLASS} style={{ color: 'var(--youtube)' }} />,
            href: 'https://www.youtube.com/watch?v=A8pz5E6wDIA',
          },
        ],
      },
    },
    {
      title: '개인 블로그 사이트',
      personnel: '1인 개발',
      period: '2025-05-05 ~ 2025-05-26',
      imgs: [exampleImage],
      techStack: ['react', 'tailwind', 'typescript', 'vercel', 'notion'],
      description: 'Notion을 Headless CMS로 활용하여 구축한 Next.js 기반의 개인 블로그입니다.',
      details: [
        'Next.js, Tailwind 기반 개인 보일러플레이트 개발 및 초기 세팅 적용',
        'next-themes와 CSS 변수, Tailwind 유틸리티 클래스를 활용한 커스텀 다크모드 드롭다운 구현',
        'SSG를 활용한 정적 페이지 생성으로 초기 로딩 속도 및 SEO 최적화',
        'generateStaticParams를 통해 블로그 게시글의 HTML을 빌드 시점에 사전 생성',
        'notion-client, react-notion-x로 Notion DB 글 목록 및 상세 데이터 패칭/캐싱 처리',
        '이미지 스켈레톤 적용으로 CLS 개선 및 시각적 안정성 확보',
        'react.memo, useCallback을 적용해 클라이언트 컴포넌트 렌더링 성능 최적화',
        'Vercel + GitHub 기반 자동 배포 파이프라인 구축',
      ],

      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/sanghyeon-blog',
          },
          {
            text: '배포',
            icon: <IoLogoVercel className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://sanghyeon-blog.vercel.app',
          },
        ],
      },
    },
    {
      title: '개인 포트폴리오 사이트',
      personnel: '1인 개발',
      period: '2025-06-05 ~ 2025-06-18',
      imgs: portfolioImages,
      techStack: ['next', 'typescript', 'vercel', 'framer-motion', 'next-themes'],
      description:
        'Next.js, Tailwind CSS, TypeScript 기반으로 제작한 포트폴리오 웹사이트이며, 다크 모드, 반응형 레이아웃, 애니메이션 기능을 적용했습니다.',
      details: [
        'framer-motion 기반 재사용 가능한 컴포넌트 MotionContainer, MotionItem를 구현해 태그 동적 지정 및 등장 시점 제어가 가능한 애니메이션 구조 설계',
        'Tailwind CSS와 CSS 변수로 브랜드 컬러 관리, 반응형·테마 대응 UI/UX 설계',
        'Vercel과 GitHub 연동을 통한 자동 배포 CI/CD 파이프라인 구축',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://github.com/sanghyeonLee2/sanghyeon.dev',
          },
          {
            text: '배포',
            icon: <IoLogoVercel className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://sanghyeon-dev.vercel.app',
          },
        ],
      },
    },
    {
      title: '배달의 신 (God of Delivery)',
      personnel: '2인 개발 (FE 1명, BE 1명)',
      period: '2023-08-01 ~ 2024-12-30',
      imgs: godOfDeliveryImages,
      techStack: [
        'react',
        'javascript',
        'recoil',
        'react-query',
        'react-hook-form',
        'axios',
        'json-server',
        'styled-components',
        'aws',
        'cloudfront',
        'kakao',
      ],
      description:
        '"배달의민족"과 "요기요"의 배달 서비스 모델을 참고하여 제작한 React 기반 웹 애플리케이션으로, 백엔드 1명과 함께한 2인 협업 프로젝트입니다.',
      details: [
        'react-router-dom으로 유저/사장/인증 페이지의 역할 기반 접근 제어 및 중첩 라우팅 구현',
        '커스텀 훅, 유틸 함수, API 모듈 등 관심사 기반 코드 분리로 UI와 비즈니스 로직 구분',
        'axios interceptors를 활용한 access-token / refresh-token 기반 JWT 인증 구조 구현',
        'json-server로 가상 API를 구축하여 백엔드 개발 전에도 프론트엔드 개발 병행',
        'React-Hook-Form + Yup으로 제어/비제어 컴포넌트를 활용한 폼 처리 및 입력 검증',
        'react-query로 쿼리 키, 데이터 캐싱을 고려한 서버 상태 관리 구현',
        'React-Hook-Form, React-Query 관련 훅들을 결합해 커스텀 훅 구성 및 재사용성 향상',
        'QueryClient 기본 옵션 설정과 에러 상황에 따른 토스트 메시지 및 fallback UI 처리',
        'react-error-boundary를 활용한 렌더링 오류 처리와 사용자 경험 개선',
        'Kakao Map API + Recoil atom/selector를 통한 좌표 및 주소 상태 비동기 관리',
        'useEffect 최소화와 react.memo, useCallback, useMemo를 통해 리렌더링 최적화',
        'AWS S3 + CloudFront 정적 파일 배포 및 GitHub Actions 기반 CI/CD 파이프라인 구축',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/god-of-delivery',
          },
          {
            text: '배포',
            icon: <FaAws className={LINK_ICON_CLASS} style={{ color: 'var(--aws)' }} />,
            href: 'https://dv19wj9tllwf5.cloudfront.net/',
          },
        ],
      },
    },
    {
      title: '광고성 리뷰 블로그 판별 크롬 확장 프로그램',
      personnel: '1인 개발',
      period: '2024-03-01 ~ 2024-06-01',
      imgs: blogReviewCheckerImages,
      techStack: [
        'javascript',
        'chrome-extension',
        'python',
        'flask',
        'pytorch',
        'esbuild',
        'kobert',
        'huggingface',
      ],
      description: '블로그 리뷰의 광고성 여부를 판단하는 KoBERT 기반 크롬 확장 프로그램입니다.',
      details: [
        'ESM 사용 제약을 esbuild로 해결하여 import/export 모듈 시스템 구현',
        'Manifest v3 기반 크롬 확장 프로그램 개발 및 esbuild 번들링',
        '학습 데이터 직접 수집, 크롤링 자동화 파이프라인 구축',
        'KoBERT 모델을 PyTorch로 학습하여 광고성 텍스트 분류 모델 개발',
        'Flask API 서버 구현 및 크롬 확장 프로그램과의 실시간 통신 구성',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/blog-review-checker',
          },
          {
            text: '논문(DBpia)',
            icon: <FaRegFileAlt className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11926115',
          },
        ],
      },
    },
    {
      title: '커피 판매 시스템',
      period: '2023-06-01 ~ 2023-06-30',
      personnel: '1인 개발',
      imgs: coffeeSalesImages,
      techStack: [
        'react',
        'javascript',
        'styled-components',
        'axios',
        'recoil',
        'node',
        'express',
        'sequelize',
        'mysql',
      ],
      description: '데이터베이스 설계 과목에서 진행한 커피 판매 풀스택 웹 어플리케이션입니다.',
      details: [
        '프론트엔드, 백엔드, 데이터베이스 전체 구조를 직접 설계하고 구현',
        'Recoil로 상태 관리, Styled-Components로 UI 구성',
        'Node.js + Express 서버 구성, Sequelize ORM으로 MySQL 연동',
        'RESTful API 설계를 통한 클라이언트-서버 통신 구조 구현',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: '깃허브',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/coffee-sales-system',
          },
        ],
      },
    },
  ],
};
