import { Flex, Heading, Grid, FullyDecentralizedIcon, InterestFreeIcon, StoreOfValueIcon } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import ContactCard from './ContactCard/ContactCard'

const TitleWrapper = styled(Heading)`
  background: -webkit-linear-gradient(#ED1C24, #FCEE21); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Hero = () => {
  const { t } = useTranslation()
  const getHeroHeading = () => {
    return (
      <TitleWrapper mb="24px" scale="xl" >vKnightHub {t('Labs')}</TitleWrapper>          
    )
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb="8px" scale="lg" color="white" id="lab-hero-title" textAlign="center"> 
          {t('vKnightHub Labs a DeFi production builder focusing on creating and developing an ecosystem of DeFi protocols and applications on multiple blockchain.')}
        </Heading>
        {getHeroHeading()}
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="center"
        height={['192px', null, null, '100%']}
        width={['192px', null, null, '100%']}
        flex={[null, null, null, '1']}
        my={['24px', null, null, '0']}
        position="relative"
      >
        <Grid
            gridRowGap="24px"
            gridColumnGap="128px"
            gridTemplateColumns={['1fr', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
          > 
            <ContactCard image={<FullyDecentralizedIcon width="100%" height="100%" />} title="Decentralized Protocol" description="Completely trustless protocol based on Smart Contracts" />
            <ContactCard image={<InterestFreeIcon width="100%" height="130" />} title="Interest Free" description="First stablecoin project based on interest free borrowing" />
            <ContactCard image={<StoreOfValueIcon width="100%" height="130" />} title="Verifiably Asset Backed" description="Every AUSD is backed by onchain collateral" />
        </Grid>  
      </Flex>
    </>
  )
}

export default Hero
