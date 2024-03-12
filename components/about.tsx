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
        Als Full-Stack Softwareentwickler habe ich Erfahrung in der Arbeit mit verschiedenen
        Frontend- und Backend Tools und bin in der Lage, mich schnell in neue Technologien
        einzuarbeiten. Meine Affinität für die IT und das Programmieren habe ich bereits in meiner
        Jugend entdeckt und seitdem stetig weiterentwickelt.
      </p>
      <br />
      <p className='font-semibold'>
        Ich bin ab dem 15. April 2024 in Teilzeit (20h/Woche) verfügbar. Nach Abschluss meines
        Informatikstudiums (~August 2024) stehe ich als Vollzeitkraft zur Verfügung.
      </p>
    </motion.section>
  );
}
