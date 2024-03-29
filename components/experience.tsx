'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Erfahrungen() {
  const { ref } = useSectionInView('Erfahrungen', 0.5);

  return (
    <section ref={ref} id='erfahrungen' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Meine Erfahrungen</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{ background: 'white', fontSize: '1.5rem' }}
            >
              <h3 className='font-semibold'>{experience.title}</h3>
              <p className='font-normal !mt-0'>{experience.location}</p>
              <p className='!mt-1 !font-normal text-gray-700'>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
