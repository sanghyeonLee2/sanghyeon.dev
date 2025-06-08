'use client';

import Logo from '../common/Logo/Logo';
import ThemeDropdown from '../common/Dropdown/ThemeDropdown';
import SectionNav from '@/components/ui/SectionNav';

export default function Header() {
  return (
    <header className="bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 w-full z-50 h-18 duration-100 ease-in">
      <div className="flex-center-between layout-wrap-max-w mx-auto p-content">
        <Logo />
        <div className="flex-center-between">
          <SectionNav />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
}
