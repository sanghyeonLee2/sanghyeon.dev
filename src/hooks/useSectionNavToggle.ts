import React, { useState, useRef, useEffect, useCallback } from 'react';
type UseSectionNavToggleType = {
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
};

const useSectionNavToggle = (): UseSectionNavToggleType => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 640) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    // dropdownRef.current: 컴포넌트 마운트 되고 ref가 실제로 돔을 참조 할때
    // e.target as Node: contain 메서드는 Node 타입에서 제공해서 ts 에서 알려줘야함 -> 타입 단언
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDropdownOpen, handleOutsideClick, handleScroll, handleResize]);

  return { toggleDropdown: () => setIsDropdownOpen((prev) => !prev), isDropdownOpen, dropdownRef };
};
export default useSectionNavToggle;
