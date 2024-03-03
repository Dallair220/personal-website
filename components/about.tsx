'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>Über mich</SectionHeading>
      <p>
        Ich bin ein Softwareentwickler, der sich auf die Entwicklung von Webanwendungen
        spezialisiert hat. Ich habe Erfahrung in der Entwicklung von Frontend- und
        Backend-Anwendungen und habe in verschiedenen Projekten gearbeitet, die von kleinen Websites
        bis hin zu großen Unternehmensanwendungen reichen.
      </p>
      <p>
        Als Softwareentwickler habe ich Erfahrung in der Arbeit mit verschiedenen Technologien und
        bin in der Lage, mich schnell in neue Technologien einzuarbeiten. Ich habe Erfahrung in der
        Arbeit mit JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL, HTML, CSS und
      </p>
    </motion.section>
  );
}
