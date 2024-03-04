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
        <a href='mailto:paulhermann.dev@pm.me' className='underline'>
          paulhermann.dev@pm.me
        </a>{' '}
        kontaktieren.
      </p>
    </section>
  );
}
