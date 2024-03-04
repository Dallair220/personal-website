import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import boostopiaImg from '@/public/boostopia.png';
import leagueladderImg from '@/public/leagueladder.png';

export const links = [
  {
    name: 'Start',
    hash: '#start',
  },
  {
    name: 'Projekte',
    hash: '#projekte',
  },
  {
    name: 'Kenntnisse',
    hash: '#kenntnisse',
  },
  {
    name: 'Erfahrungen',
    hash: '#erfahrungen',
  },
  {
    name: 'Kontakt',
    hash: '#kontakt',
  },
] as const;

export const experiencesData = [
  {
    title: 'Product Owner und Projektmanager',
    location: 'Deutschland',
    description:
      'Ich habe an meinem eigenen kleinen Unternehmen gearbeitet und die Erstellung einer Webplattform zur Verbindung von Kunden und Freelancern für Videospielservices geleitet.',
    icon: React.createElement(CgWorkAlt),
    date: '2022-2023',
  },
  {
    title: 'Front-End Entwickler',
    location: 'Deutschland',
    description:
      'Ich habe mich ins Programmieren vertieft, um unsere Webplattform zu verbessern. Es hat so viel Spaß gemacht, dass ich mich für eine Tech-Karriere entschieden habe.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
  {
    title: 'Wirtschaftsinformatik (Bachelor of Science)',
    location: 'Köln, Deutschland',
    description:
      'Ich studiere derzeit Informatik an der Technischen Hochschule Köln. Ich erwarte, im August 2024 meinen Abschluss zu machen. In allen Programmierkursen habe ich eine 1,0 erreicht.',
    icon: React.createElement(LuGraduationCap),
    date: '~ August 2024',
  },
  {
    title: 'Werkstudent: Full-Stack Entwickler',
    location: 'Remote (innerhalb Deutschland)',
    description:
      'Ich bin offen für eine Werkstudententätigkeit im Bereich Full-Stack Softwareentwicklung mit einem Umfang von 20 Stunden pro Woche.',
    icon: React.createElement(CgWorkAlt),
    date: 'ab sofort',
  },
] as const;

export const projectsData = [
  {
    title: 'Boostopia',
    description:
      'Eine Plattform, um Kunden und Freelancer für Videospielservices zu verbinden. Besonderheit: Bestellverwaltung, verschiedene Dashboards je Usertyp.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: boostopiaImg,
  },
  {
    title: 'League Ladder',
    description:
      'Als Teil meine Praxisprojekts an der TH Köln habe ich eine Webplattform entwickelt, um eine Elo-basierte Rangliste für ein Videospiel zu verwalten.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: leagueladderImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Linux',
  'Next.js',
  'Tailwind',
  'Framer Motion',
] as const;
