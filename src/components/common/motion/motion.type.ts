import { HTMLMotionProps } from 'framer-motion';

export type HTMLTag = keyof HTMLElementTagNameMap;

export type MotionItemProps<T extends HTMLTag> = {
  as: T;
  children: React.ReactNode;
  amount?: number;
} & HTMLMotionProps<T>;
