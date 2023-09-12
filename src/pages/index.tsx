import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CurrentProjects from '@/components/CurrentProjects';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ActiveSectionProvider } from '@/context/ActiveSectionContext';

export default function Redesign() {


  return (
    <>
      <Head>
        <title>Front-End Software Engineer | Austin Jenkins</title>
        <meta name="description" content="Howdy folks!  I'm Austin and am into building cool web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <ActiveSectionProvider>
        <Navigation />
        <main>
          <Hero />
          <CurrentProjects />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      </ActiveSectionProvider>
    </>
  )
}

