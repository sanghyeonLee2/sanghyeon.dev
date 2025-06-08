'use client';
import React, { useState } from 'react';
import ImageComponent from '@/components/common/Image/ImageComponent';
import exampleImage from '@/assets/example.png';
import Modal from '@/components/common/Modal/Modal';
import ALink from '@/components/common/Link/ALink';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    key: 1,
    title: 'qwe',
    cover: exampleImage,
    tags: ['123', 'zcx', 'as', 'ZXc'],
    description: '동해물과 백두산이 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세',
  },
  {
    key: 2,
    title: '12',
    cover: exampleImage,
    tags: ['12', 'zcx', '41', 'ZXc'],
    description:
      '동해물과 백두산이 마르고 닭도록 하느님이 보우하사 우리나라 만세 강산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세',
  },
  {
    key: 3,
    title: 'qw',
    cover: exampleImage,
    tags: ['as', 'zcx', 'asd', 'ZXc'],
    description:
      '동해물과 백두산이 마르고 닭도록 하느님이 보우하사 우리나라 만세 강산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 해물과 백두산이 마르고 닭도록 하느님이 보우하사 우리나라 만세 강산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세',
  },
  {
    key: 4,
    title: 'as',
    cover: exampleImage,
    tags: ['1', 'zcx', 'asd', 'ZXc'],
    description:
      '동해물과 백두산이 마르고 닭도록 하느님이 보우하사 우리나라 만세 강산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세',
  },
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">모달 제목</h2>
        <p className="text-gray-700 text-sm">이곳에 원하는 내용을 자유롭게 넣을 수 있습니다.</p>
      </Modal>
      <ul className="grid gap-6 sm:grid-cols-2 mb-4">
        {PROJECTS.map((project) => (
          <li key={project.key}>
            <article
              onClick={() => setIsOpen(true)}
              className="group relative pointer-events-auto rounded-xl shadow cursor-pointer hover:shadow-lg hover:opacity-80 hover:scale-[1.01] transition-all duration-200"
            >
              <ALink
                className="absolute top-4 right-4 z-30 w-11 h-11 flex-center rounded-full bg-white/80 shadow-md transition"
                icon={<Github className="w-5 h-5 text-gray-800" />}
                href="https://github.com/sanghyeonLee2"
                onClick={(e) => e.stopPropagation()}
              />
              <ImageComponent
                className={'h-60 rounded-t-2xl'}
                src={project.cover}
                alt={project.title}
              />
              <div className="p-content">
                <h3>{project.title}</h3>
                <div className="flex gap-2 flex-wrap text-sm font-semibold mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="h-20 line-clamp-3">{project.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
