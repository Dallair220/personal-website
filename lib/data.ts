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
    location: 'Boostopia (Remote)',
    description: 'Ich habe als Gründer die Entwicklung einer Webplattform zur Verbindung von Kunden und Freelancern für Videospieldienstleistungen geleitet.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Full-Stack Softwareentwickler',
    location: 'Boostopia (Remote)',
    description: 'Die Weiterentwicklung meiner eigenen Webplattform mit modernen JavaScript-Technologien hat meinen Weg in die professionelle Softwareentwicklung weiter gefestigt.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
  {
    title: 'B.Sc. Wirtschaftsinformatik',
    location: 'TH Köln (Gummersbach)',
    description: 'Abschlussnote: 1,8',
    icon: React.createElement(LuGraduationCap),
    date: 'Oktober 2024',
  },
  {
    title: 'Softwareentwickler',
    location: 'Unicon GmbH (Remote)',
    description: 'Weiterentwicklung der Scout Management-Plattform.',
    icon: React.createElement(CgWorkAlt),
    date: 'Mai 2024 - Januar 2025',
  },
  {
    title: 'Application Development Engineer (bei Citrix)',
    location: 'Citrix (Remote)',
    description: 'Weiterentwicklung des Scout Board.',
    icon: React.createElement(CgWorkAlt),
    date: 'seit Januar 2025',
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
] as const;
