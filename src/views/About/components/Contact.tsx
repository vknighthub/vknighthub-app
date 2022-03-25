import { Flex, Grid, Heading, Image } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import ContactCard from './ContactCard/ContactCard'


const Decorations = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center 0;
`
const TitleWrapper = styled(Heading)`
  background: -webkit-linear-gradient(#ED1C24, #FCEE21); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Contact = () => {
  const { t } = useTranslation()
  const getHeroHeading = () => {
    return (
      <TitleWrapper mb="64px" scale="xl" >{t('Contact us')}</TitleWrapper>          
    )
  }

  return (
    <>
      <Flex flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="center">
        <Decorations />
        {getHeroHeading()}
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <Grid
            gridRowGap="24px"
            gridColumnGap="128px"
            gridTemplateColumns={['1fr', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
          > 
            <ContactCard type="BUSSINESS" address="vKnightHub@gmail.com" />
            <ContactCard type="SUPPORT" address="vKnightHub@gmail.com" />
            <ContactCard type="MEDIA" address="vKnightHub@gmail.com" />
        </Grid>  
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']} my="60px">
        <Image src="/images/abouts/contact/contact.webp" alt="" width={1920} height={850} />
      </Flex>
    </>
  )
}

export default Contact
