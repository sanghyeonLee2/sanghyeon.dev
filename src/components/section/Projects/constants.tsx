import exampleImage from '@/assets/example.png';
import { ProjectsType } from '@/components/section/Projects/projects.type';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import clsx from 'clsx';
import { BRAND_COLORS } from '@/constants/colors';

const iconSize = '10';

export const PROJECTS: ProjectsType[] = [
  {
    key: 1,
    title: 'qwe',
    period: '2022-03-01',
    imgs: [exampleImage],
    techStack: [
      { name: 'React', color: BRAND_COLORS.react },
      { name: 'Tailwind CSS', color: BRAND_COLORS.tailwind },
      { name: 'TypeScript', color: BRAND_COLORS.typescript },
    ],
    description: '동해물과 백두산이 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세',
    details: [
      'React와 Tailwind CSS 기반의 간단한 정보 카드 프로젝트입니다.',
      '컴포넌트 재사용성과 유연한 props 전달 구조를 실험하였습니다.',
      '최소한의 구조로도 깔끔한 디자인을 유지하는 것을 목표로 했습니다.',
    ],
    linksOptions: [
      {
        text: 'GitHub',
        icon: (
          <FaGithub
            className={clsx('rounded-full', `w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.github }}
          />
        ),
        href: 'https://github.com/sanghyeonLee',
      },
    ],
  },
  {
    key: 2,
    title: '12',
    period: '2022-03-01',
    imgs: [exampleImage],
    techStack: [
      { name: 'Next.js', color: BRAND_COLORS.next },
      { name: 'TypeScript', color: BRAND_COLORS.typescript },
      { name: 'Markdown', color: BRAND_COLORS.markdown },
    ],
    description: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세...',
    details: [
      'Vercel에 블로그를 배포한 포트폴리오 프로젝트입니다.',
      'Next.js의 정적 생성(SSG)과 동적 경로 처리를 학습했습니다.',
      '마크다운 기반 블로그 글 렌더링 처리 구조를 구현했습니다.',
    ],
    linksOptions: [
      {
        text: 'GitHub',
        icon: (
          <FaGithub
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.github }}
          />
        ),
        href: 'https://github.com/sanghyeonLee',
      },
      {
        text: 'Vercel',
        icon: (
          <IoLogoVercel
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.vercel }}
          />
        ),
        href: 'https://sanghyeon-blog.vercel.app',
      },
    ],
  },
  {
    key: 3,
    title: 'qw',
    period: '2022-03-01',
    imgs: [exampleImage],
    techStack: [
      { name: 'React', color: BRAND_COLORS.react },
      { name: 'Figma', color: BRAND_COLORS.figma },
      { name: 'TypeScript', color: BRAND_COLORS.typescript },
    ],
    description: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세...',
    details: [
      'Figma를 통해 전체 UI/UX 시안을 설계했습니다.',
      'React 컴포넌트 구조 설계 및 모듈화에 중점을 두었습니다.',
      '팀원 3인과 협업하여 Git Flow 전략을 적용했습니다.',
    ],
    linksOptions: [
      {
        text: 'GitHub',
        icon: (
          <FaGithub
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.github }}
          />
        ),
        href: 'https://github.com/sanghyeonLee',
      },
      {
        text: 'Vercel',
        icon: (
          <IoLogoVercel
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.vercel }}
          />
        ),
        href: 'https://sanghyeon-blog.vercel.app',
      },
      {
        text: 'Figma',
        icon: (
          <FaFigma
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.figma }}
          />
        ),
        href: 'https://www.figma.com/@sanghyeon',
      },
    ],
  },
  {
    key: 4,
    title: 'as',
    period: '2022-03-01',
    imgs: [exampleImage],
    techStack: [
      { name: 'Tailwind CSS', color: BRAND_COLORS.tailwind },
      { name: 'JavaScript', color: BRAND_COLORS.javascript },
      { name: 'React', color: BRAND_COLORS.react },
    ],
    description: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세...',
    details: [
      '다크모드 및 반응형 디자인을 중점적으로 테스트한 프로젝트입니다.',
      'Tailwind CSS의 커스텀 테마를 활용해 색상 전환을 구현했습니다.',
      '간단한 슬라이더 및 모달 인터랙션을 구현했습니다.',
    ],
    linksOptions: [
      {
        text: 'Vercel',
        icon: (
          <IoLogoVercel
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.vercel }}
          />
        ),
        href: 'https://sanghyeon-blog.vercel.app',
      },
      {
        text: 'Figma',
        icon: (
          <FaFigma
            className={clsx(`w-${iconSize}`, `h-${iconSize}`)}
            style={{ color: BRAND_COLORS.figma }}
          />
        ),
        href: 'https://www.figma.com/@sanghyeon',
      },
    ],
  },
];
