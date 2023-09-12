import Head from 'next/head';
import Header from '@/components/Header';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import { ResumeContext, initialResume } from '@/context/ResumeContext';
import { CMSContext, CMSContextType } from '@/context/CMSContext';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import MobileMenu from '@/components/MobileMenu';
import { SiteProvider } from '@/context/siteContext';
import { AssetFields, createClient } from 'contentful';

type Props = {
  cmsData: CMSContextType;
}
export default function Home({
  cmsData
}: Props) {


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

      <main className=''>
        <SiteProvider>
          <CMSContext.Provider value={cmsData}>
            <ResumeContext.Provider value={initialResume}>
              <MobileMenu />
              <Header />
                <ProfessionalSummary />
              <div className='resume-body'>
                <Experience />
                <Education />
                <Skills />
              </div>
            </ResumeContext.Provider>
          </CMSContext.Provider>
        </SiteProvider>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });

  // Retrieve the list of blog posts from Contentful
  const getResumePageData = async () => {
    const query = `
      {
        professionalExperiencesCollection(order: order_ASC) {
          items {
            cardImage {
              url
            },
            jobTitle,
            company,
            startDate,
            endDate,
            location,
            description {
              json
            },
            order
          }
        },
        generalInformation(id: "21GLau1E9jwEZSyhbyDYWO") {
          name,
          tagline,
          linkedInUrl,
          gitHubUrl,
          resumeUrl,
          aboutMeTitle,
          aboutMe {
            json
          }
        }
      }
`;


    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query })
    });

    const { data } = await response.json();

    return data;

  };

  return {
    props: {
      cmsData: await getResumePageData(),
    },
  }
}
