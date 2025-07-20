import { ExperienceType } from '@/components/section/Experience/experience.type';

export const EXPERIENCES: ExperienceType[] = [
  {
    subheading: '🎓 Education',
    contents: [
      {
        name: '동서대학교',
        period: '2019.03~2025.02',
        summaries: ['소프트웨어학과', '빅데이터 전공 (부전공)'],
      },
    ],
  },
  {
    subheading: '💡 Activities',
    contents: [
      {
        name: 'DN 연구실',
        period: '2021.12~2024.12',
        summaries: [
          '평일 오전 10시부터 오후 10시까지 자기주도 학습을 꾸준히 실천',
          '교내 창업 동아리 및 다양한 학습 프로그램에서 선후배와 협업 프로젝트 수행',
          '매주 학습 내용을 노션에 정리하고 이를 바탕으로 주간 세미나 진행 (한시적 진행)',
        ],
      },
      {
        name: '제10회 AI·SW융합 해커톤',
        period: '2025.07.10 ~ 2025.07.11',
        summaries: [
          '아이디어 기획부터 예선 통과 후 본선 개발에 참여하여 프로젝트 완성',
          '오프라인 해커톤 현장에서 장려상 수상 및 최종 결과물 발표',
          '프론트엔드, 백엔드, AI, 기획으로 구성된 4인 팀에서 프론트엔드 전반 단독 구현',
        ],
      },
      {
        name: '한국컴퓨터정보학회 2024 하계학술대회',
        period: '2024.07.11~2024.07.13',
        summaries: [
          '2024 한국컴퓨터정보학회 하계학술대회 발표 및 논문 게재',
          'AI 모델 학습 및 웹 확장 프로그램 전체 개발 (크롤링·전처리·서버·클라이언트)',
        ],
      },
      {
        name: 'Github 쇼케이스',
        period: '2023.03~2023.12',
        summaries: [
          '오픈소스 소프트웨어 개발 능력 향상을 위한 교내 Github 경진대회 참가 및 우수상 수상',
          '일관된 커밋 메시지 작성, 충돌 해결, 브랜치 전략 및 풀 리퀘스트 기반 협업 주도',
        ],
      },
      {
        name: 'DevFest 2024 : 삐약톤 캠퍼스 대항전',
        period: '2025.01.11~2025.01.12',
        summaries: [
          '무박 2일 오프라인 해커톤 참가 경험',
          '프론트엔드·백엔드·디자이너로 구성된 팀에서 협업하며 개발 및 커뮤니케이션 역량 강화',
        ],
      },
    ],
  },
  {
    subheading: '🛠️ Certifications',
    contents: [
      {
        name: 'SQLD',
        period: '2022.10',
        summaries: ['한국데이터산업진흥원 (Kdata)', '데이터 모델링 및 SQL 활용 능력 검정'],
      },
    ],
  },
];
