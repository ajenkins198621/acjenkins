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
        <link rel="icon" href="/favicon.ico" />
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
