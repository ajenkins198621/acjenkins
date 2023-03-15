import Head from 'next/head';
import Header from '@/components/Header';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import { ResumeContext, initialResume } from '@/context/ResumeContext';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Web Developer | Austin Jenkins</title>
        <meta name="description" content="Howdy folks!  I'm Austin and am into building cool web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <ResumeContext.Provider value={initialResume}>
          <Header />
          <ProfessionalSummary />
          <Experience />
          <Education />
          <Skills />
        </ResumeContext.Provider>
      </main>
    </>
  )
}
