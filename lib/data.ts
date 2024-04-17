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
      'Ich habe an meinem eigenen kleinen Unternehmen gearbeitet und die Erstellung einer Webplattform (zur Verbindung von Kunden und Freelancern für Videospieldienstleistungen) geleitet.',
    icon: React.createElement(CgWorkAlt),
    date: '2022-2023',
  },
  {
    title: 'Front-End Entwickler',
    location: 'Deutschland',
    description:
      'Nach intensiver Beschäftigung mit Web-Entwicklung und JavaScript-Technologien zur Verbesserung unserer Plattform, entschied ich mich für eine Karriere in der Softwareentwicklung.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
  {
    title: 'Wirtschaftsinformatik (Bachelor of Science)',
    location: 'Köln, Deutschland',
    description:
      'Ich studiere derzeit Informatik an der Technischen Hochschule Köln. Voraussichtlich werde ich meinen Abschluss im August 2024 erhalten. In allen Programmierkursen habe ich eine 1,0 erreicht.',
    icon: React.createElement(LuGraduationCap),
    date: '~ August 2024',
  },
  {
    title: 'Full-Stack Entwickler',
    location: 'Remote (innerhalb Deutschland)',
    description:
      'Während meiner Bachelorarbeit bin ich offen für eine Teilzeitstelle als Full-Stack Softwareentwickler mit einem Umfang von 20 Stunden pro Woche.',
    icon: React.createElement(CgWorkAlt),
    date: 'ab sofort',
  },
] as const;

export const projectsData = [
  {
    title: 'Boostopia',
    description:
      'Plattform zur Verbindung von Kunden und Freelancern im Bereich Videospielservices. Features: Automatisches Bestellmanagement und rollenspezifische Dashboards.',
    tags: ['React', 'NestJS', 'MongoDB', 'Bootstrap', 'Stripe', 'Wise API'],
    imageUrl: boostopiaImg,
    link: 'https://staging.boostopia.gg/',
    github: 'private',
  },
  {
    title: 'League Ladder',
    description:
      'Im Rahmen meines Praxisprojekts an der TH Köln habe ich eine Full-Stack Web-App zur eigenständigen Verwaltung einer Rangliste für ein Videospiel entwickelt.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Sessions', 'OAuth2'],
    imageUrl: leagueladderImg,
    github: 'https://github.com/Dallair220/studium',
    link: 'https://praxisprojekt-cf89137f47c5.herokuapp.com/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Linux',
  'Heroku',
  'Bootstrap',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Framer Motion',
] as const;
