import type { Metadata } from 'next';

export const SITE_METADATA = {
  BLOG_INTRO: '상현의 포트폴리오',
  BLOG_DESCRIPTION: '프론트엔드 개발자 상현의 포트폴리오입니다.',
  COPY_RIGHT: '© 2025 Sanghyeon Lee. All rights reserved.',
  MY_GITHUB_URL: 'https://github.com/sanghyeonLee2',
  VERCEL_DEPLOY_URL: 'https://sanghyeon-dev.vercel.app/',
  LINK_TO_GITHUB: 'GitHub에서 보기 ↗',
  AUTHOR: 'Sanghyeon Lee',
  SITE_NAME: '상현 포트폴리오',
  DESCRIPTION: '프론트엔드 개발자 상현의 기술 스택, 프로젝트, 블로그를 담았습니다.',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.VERCEL_DEPLOY_URL),
  title: '상현 포트폴리오',
  description: '프론트엔드 개발자 상현의 포트폴리오 사이트입니다.',
  keywords: [
    '상현 포트폴리오',
    '프론트엔드 개발자',
    '프론트엔드 포트폴리오',
    '웹 개발자',
    'React',
    'Next.js',
    'TypeScript',
    '개발자 이력서',
    '프로젝트 소개',
    '개발 블로그',
  ],
  openGraph: {
    title: '상현 포트폴리오',
    description: '프론트엔드 개발자 상현의 포트폴리오 사이트입니다.',
    url: SITE_METADATA.VERCEL_DEPLOY_URL,
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '상현 포트폴리오',
    description: '프론트엔드 개발자 상현의 포트폴리오 사이트입니다.',
    images: ['/opengraph-image.png'], // 상대 경로로 변경
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};
