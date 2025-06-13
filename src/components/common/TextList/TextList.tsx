import React from 'react';
import clsx from 'clsx';

interface TextListProps {
  textList: string[];
  className?: string;
}

const TextList = ({ textList, className }: TextListProps) => {
  return (
    <ul className={clsx('space-y-1 list-disc pl-5', className)}>
      {textList.map((text) => (
        <li key={text}>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TextList;
