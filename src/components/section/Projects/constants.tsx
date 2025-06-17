import exampleImage from '@/assets/example.png';
import exampleImage_1 from '@/assets/example_1.png';
import exampleImage_2 from '@/assets/example_2.png';
import { ProjectsType } from '@/components/section/Projects/projects.type';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';

const LINK_ICON_CLASS = 'w-10 h-10';

export const PROJECT: ProjectsType = {
  subheading: '📝 상세내용',
  contents: [
    {
      key: 1,
      title: 'sanghyeon-blog',
      period: '2025-05-05 ~ 2025-05-26',
      imgs: [exampleImage],
      techStack: ['react', 'tailwind', 'typescript', 'vercel', 'notion'],
      description: 'Notion을 Headless CMS로 활용하여 구축한 Next.js 기반의 개인 블로그입니다.',
      details: [
        'Next, Tailwind 기반 개인 보일러 플레이트 개발 및 이를 활용해 초기 세팅을 진행했습니다.',
        '아토믹 디자인을 통해 재사용성 높은 디렉토리 구조를 설계하였습니다.',
        'next-themes 기반으로 CSS 변수와 Tailwind class 전략 모두를 지원하는 커스텀 드롭다운 다크모드 기능을 구현했습니다.',
        'SSG 기반 정적 페이지 생성을 통해 초기 로딩 속도와 SEO를 최적화했습니다.',
        'generateStaticParams를 활용해 빌드시 블로그 게시글 html을 미리 생성했습니다.',
        'notion-client API, react-notion-x API를 활용하여 Notion DB 게시글 목록 및 단일 게시글 데이터 패칭 및 캐싱을 구현했습니다.',
        '단일 게시글 페이지의 이미지 로드 타이밍에 스켈레톤 이미지를 사용하여 사전 공간 확보 및 CLS 개선을 시도했습니다.',
        '클라이언트 컴포넌트에 react.memo, useCallback을 적용해 성능 최적화를 진행했습니다.',
        'Vercel 기반 배포 환경 구성과 GitHub push 시 자동 반영되는 CI/CD 파이프라인을 설정했습니다.',
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
      key: 2,
      title: '개인 포트폴리오 사이트',
      period: '2025-06-05 ~ 2025-06-18',
      imgs: [exampleImage],
      techStack: ['next', 'typescript', 'vercel'],
      description: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세...',
      details: [
        'Vercel에 블로그를 배포한 포트폴리오 프로젝트입니다.',
        'Next.js의 정적 생성(SSG)과 동적 경로 처리를 학습했습니다.',
        '마크다운 기반 블로그 글 렌더링 처리 구조를 구현했습니다.',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: 'GitHub',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee',
          },
          {
            text: 'Vercel',
            icon: <IoLogoVercel className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://sanghyeon-blog.vercel.app',
          },
        ],
      },
    },
    {
      key: 3,
      title: '배달의 신 (God of Delivery)',
      period: '2023-08-01 ~ 2023-09-30',
      imgs: [exampleImage],
      techStack: [
        'react',
        'javascript',
        'recoil',
        'react-query',
        'styled-components',
        'aws',
        'cloudfront',
        'kakao',
      ],
      description: 'React 기반 배달 서비스 웹 애플리케이션으로, 2인 협업 프로젝트입니다.',
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
            text: 'GitHub',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/god-of-delivery',
          },
          {
            text: '배포',
            icon: <IoLogoVercel className={LINK_ICON_CLASS} style={{ color: 'var(--vercel)' }} />,
            href: 'https://dv19wj9tllwf5.cloudfront.net/',
          },
        ],
      },
    },
    {
      key: 4,
      title: '광고 리뷰 판별 크롬 확장 프로그램',
      period: '2024-03-01 ~ 2024-06-01',
      imgs: [exampleImage],
      techStack: [
        'javascript',
        'react',
        'tailwind',
        'flask',
        'kobert',
        'huggingface',
        'chrome-extension',
      ],
      description: '블로그 리뷰의 광고성 여부를 판단하는 KoBERT 기반 크롬 확장 프로그램입니다.',
      details: [
        'ESM 사용 제약을 esbuild로 해결하여 import/export 모듈 시스템 구현',
        '학습 데이터 직접 수집, 크롤링 자동화 파이프라인 구축',
        'BeautifulSoup, Selenium, Playwright를 병행하여 크롤러 제작',
        'KoBERT 모델을 PyTorch로 학습하여 광고성 텍스트 분류 모델 개발',
        'Flask API 서버 구현 및 크롬 확장 프로그램과의 실시간 통신 구성',
        'Manifest v3 기반 크롬 확장 프로그램 개발 및 esbuild 번들링',
      ],
      linksOption: {
        subheading: '🔗 관련링크',
        contents: [
          {
            text: 'GitHub',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/blog-review-checker',
          },
        ],
      },
    },
    {
      key: 5,
      title: '커피 판매 시스템',
      period: '2023-06-01 ~ 2023-06-30',
      imgs: [exampleImage, exampleImage_1, exampleImage_2],
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
            text: 'GitHub',
            icon: <FaGithub className={LINK_ICON_CLASS} style={{ color: 'var(--github)' }} />,
            href: 'https://github.com/sanghyeonLee2/coffee-sales-system',
          },
        ],
      },
    },
  ],
};
