'use client';

import React from 'react';
import Button from '@/components/common/Button/Button';
import ThemeToggle from './ThemeToggle';
import SectionNav from '@/components/ui/SectionNav';
import { IoIosMenu } from 'react-icons/io';
import DropdownList from '@/components/common/Dropdown/DropdownList';
import useSectionNavToggle from '@/hooks/useSectionNavToggle';
import ALink from '@/components/common/Link/ALink';
import useScrolled from '@/hooks/useScrolled';
import clsx from 'clsx';

export default function Header() {
  const { toggleDropdown, isDropdownOpen, dropdownRef } = useSectionNavToggle();
  const scrolled = useScrolled();
  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 w-full z-50 h-18 duration-200 ease-in',
        scrolled ? 'header-bg' : 'bg-transparent',
      )}
    >
      <div className="flex-center-between p-content layout-wrap-max-w mx-auto h-full">
        <div className="flex-center gap-2">
          <ALink
            href={`#intro`}
            className="hover:opacity-80 text-xl font-extrabold font-cafe"
            text="상현 포트폴리오"
          />
          <ThemeToggle />
        </div>
        <SectionNav className="hidden sm:flex gap-5 px-2" />
        <Button
          onClick={toggleDropdown}
          className="sm:hidden rounded"
          aria-expanded={isDropdownOpen}
          aria-controls="dropdown-list"
        >
          <IoIosMenu className="w-8 h-8" />
        </Button>
      </div>
      {isDropdownOpen && <DropdownList ref={dropdownRef} className="header-bg" />}
    </header>
  );
}
