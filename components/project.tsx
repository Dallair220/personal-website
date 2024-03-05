'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaGithubSquare, FaGlobe } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  github,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <article className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[23rem] transition sm:group-even:even:pl-8'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col space-y-4 h-full sm:group-even:ml-[20rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>

          {github !== 'private' ? (
            <a
              href={github}
              target='_blank'
              className='bg-[#5865F2] bg-opacity-20 px-4 py-2 text-gray-700 flex items-center justify-around rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
            >
              <div className='text-2xl'>
                <FaGithubSquare />
              </div>
              <span className='font-medium'>Siehe Quellcode</span>
              <div className='text-sm text-gray-500'>
                <FaExternalLinkAlt />
              </div>
            </a>
          ) : (
            <a
              href={link}
              target='_blank'
              className='bg-[#FFFBD8] px-4 py-2 text-gray-700 flex items-center justify-around rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
            >
              <div className='text-2xl'>
                <FaGlobe />
              </div>
              <span className='font-medium'>Siehe Website</span>
              <div className='text-sm text-gray-500'>
                <FaExternalLinkAlt />
              </div>
            </a>
          )}
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={90}
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40'
        />
      </article>
    </motion.div>
  );
}
