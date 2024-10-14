'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import profile from '../public/profilbild.png';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Start', 0.25);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='start'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <motion.div
        className='mb-5 px-4 font-medium'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='flex items-center justify-center gap-5'>
          <div>
            <h1 className='font-bold text-2xl sm:text-4xl'>Paul Hermann</h1>
            <h2 className='text-xl sm:text-2xl'>Full-Stack Softwareentwickler</h2>
          </div>
          <div>
            <div className='flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 2 }}
                whileTap={{ scale: 3 }}
                transition={{
                  type: 'spring',
                  duration: 0.25,
                }}
              >
                <Image
                  src={profile}
                  alt='Paul Hermann'
                  priority={true}
                  quality={95}
                  className='h-20 w-20 rounded-full object-cover border border-white shadow-xl'
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <p className='text-md sm:text-lg mt-4'>
          Web-Apps zu entwickeln und das Erlernen neuer Technologien sind meine Leidenschaft. Meine
          bevorzugte Programmiersprache ist JavaScript und ich habe Erfahrung mit
          <br />
          React, Node.js, Express.js und MongoDB.
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href='mailto:dev@paulhermann.me'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-102 transition'
          onClick={() => {
            setActiveSection('Kontakt');
            setTimeOfLastClick(Date.now());
          }}
        >
          E-Mail <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </a>
        <a
          href='/Lebenslauf.pdf'
          download
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-102 transition cursor-pointer border border-black/10'
        >
          Lebenslauf <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex gap-2'>
          <a
            href='https://www.linkedin.com/in/paulhermann220/'
            target='_blank'
            className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full text-3xl focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/Dallair220'
            target='_blank'
            className='bg-white p-3 text-gray-700 flex items-center gap-2 text-[2rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
