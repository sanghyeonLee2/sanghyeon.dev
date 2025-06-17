'use client';
import { TEXT } from '@/constants/messages';
import Button from '../common/Button/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="flex-1 flex flex-col items-center justify-center h-[70vh] text-center p-6">
      <h2>404</h2>
      <p className="text-lg mb-4">페이지를 찾을 수 없습니다</p>
      <Button
        text={TEXT.BUTTON.GO_HOME}
        className="w-full max-w-[15rem] p-content rounded shadow-[var(--shadow)]"
        onClick={() => router.push('/')}
      />
    </main>
  );
}
