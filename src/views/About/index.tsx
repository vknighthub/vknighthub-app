import PageSection from 'components/PageSection'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { PageMeta } from '../../components/Layout/Page'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Contact from './components/Contact'

import {
  GET_CONTACT_BG, GET_MISSION_BG, TITLE_BG, TITLE_BG_LIGHT, GET_MISSION_BG_LIGHT, GET_CONTACT_BG_LIGHT
} from './pageSectionStyles'

const AboutPage = styled.div`
  min-height: calc(100vh - 64px);
`

const About = () => {
  const { theme } = useTheme()
  return (
    <>
      <PageMeta />
      <AboutPage>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }} 
          background={theme.isDark ? TITLE_BG : TITLE_BG_LIGHT} 
          index={1} 
          hasCurvedDivider={false}
        >
          <Hero />
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          background={theme.isDark ? GET_MISSION_BG : GET_MISSION_BG_LIGHT}
          index={2}
          hasCurvedDivider={false}
        >
          <Mission />
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%'} }}
          background={theme.isDark ? GET_CONTACT_BG : GET_CONTACT_BG_LIGHT}
          index={1}
          hasCurvedDivider={false} 
        >
          <Contact />
        </PageSection>
      </AboutPage>
    </>
  )
}

export default About
