import React from 'react';

export type DropdownOptions = {
  value: 'light' | 'dark' | 'system';
  label: string;
  icon: React.ReactNode;
};

export interface LinkType extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  icon?: React.ReactNode;
}
export interface SectionProps {
  title: string;
}
