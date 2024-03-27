'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function Kontakt() {
  const { ref } = useSectionInView('Kontakt', 1);

  return (
    <section ref={ref} id='kontakt' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Kontakt</SectionHeading>
      <p>
        Sie können mich unter{' '}
        <a
          href='mailto:dev@paulhermann.me'
          className='font-medium underline hover:text-blue-800 hover:no-underline'
        >
          dev@paulhermann.me
        </a>{' '}
        kontaktieren.
      </p>
    </section>
  );
}
