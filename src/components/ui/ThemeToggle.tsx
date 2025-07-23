'use client';

import { useNextTheme } from '@/hooks/useNextTheme';
import Button from '@/components/common/Button/Button';
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';

export default function ThemeToggle() {
  const { setTheme, mounted, currentTheme } = useNextTheme();

  if (!mounted) return null;

  return (
    <Button
      className="w-6 h-6 flex-center rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
      onClick={setTheme}
    >
      {currentTheme === 'dark' ? <IoMdMoon color="#C3B1E1" /> : <MdSunny color="#F7D070" />}
    </Button>
  );
}
