import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Erfahrungen from '@/components/experience';
import Kontakt from '@/components/contact';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Erfahrungen />
      <Kontakt />
    </main>
  );
}
