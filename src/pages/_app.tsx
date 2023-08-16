import '@/styles/global.scss'
import '@/styles/Navigation.scss'
import '@/styles/Hero.scss'
import '@/styles/Divider.scss'
import '@/styles/CurrentProjects.scss'
import '@/styles/SectionHeader.scss'
import '@/styles/ExperienceSection.scss'
import '@/styles/SkillsSection.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
