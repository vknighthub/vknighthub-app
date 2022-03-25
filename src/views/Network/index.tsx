import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import { PageMeta } from '../../components/Layout/Page'
import Hero from './components/Hero'
import { TITLE_BG, TITLE_BG_LIGHT } from './pageSectionStyles'


const NextworkPage = styled.div`
  min-height: calc(100vh - 64px);
`

const Nextwork = () => {
  const { theme } = useTheme()
  return (
    <>
      <PageMeta />
      <NextworkPage>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }} 
          background={theme.isDark ? TITLE_BG : TITLE_BG_LIGHT} 
          index={1} 
          hasCurvedDivider={false}
        >
          <Hero />
        </PageSection>
      </NextworkPage>
    </>
  )
}

export default Nextwork
