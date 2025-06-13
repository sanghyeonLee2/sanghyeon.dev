import { FaGithub, FaBlog } from 'react-icons/fa';
import { LinkType } from '@/types/ui';

export const PROFILE_OPTIONS: LinkType[] = [
  {
    text: 'https://github.com/sanghyeonLee2',
    icon: <FaGithub className="text-2xl" />,
    href: 'https://github.com/sanghyeonLee',
  },
  {
    text: 'https://sanghyeon-blog.vercel.app',
    icon: <FaBlog className="text-2xl" />,
    href: 'https://sanghyeon-blog.vercel.app',
  },
];
export const INTRODUCE: string =
  '안녕하세요, 사용자 경험을 중요하게 생각하는 프론트엔드 개발자 이상현입니다. React, Next.js,Tailwind CSS를 중심으로 구조적이고 유지보수 가능한 UI 개발에 강점을 가지고 있으며, 최근에는성능 최적화와 다크모드/반응형 UI 구현에 집중하고 있습니다. 협업과 커뮤니케이션을 중시하며,함께 성장하는 개발자를 지향합니다.';
