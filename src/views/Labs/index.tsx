import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import { PageMeta } from '../../components/Layout/Page'
import Hero from './components/Hero'
import { TITLE_BG, TITLE_BG_LIGHT } from './pageSectionStyles'


const LabskPage = styled.div`
  min-height: calc(100vh - 64px);
`

const Labs = () => {
  const { theme } = useTheme()
  return (
    <>
      <PageMeta />
      <LabskPage>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }} 
          background={theme.isDark ? TITLE_BG : TITLE_BG_LIGHT} 
          index={1} 
          hasCurvedDivider={false}
        >
          <Hero />
        </PageSection>
      </LabskPage>
    </>
  )
}

export default Labs
