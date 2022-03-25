import { Flex, Heading } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import styled, { keyframes } from 'styled-components'
import { NetworkBackground } from '../svgs'
import CompositeImage, { CompositeImageProps } from './CompositeImage'

const TitleWrapper = styled(Heading)`
  background: -webkit-linear-gradient(#ED1C24, #FCEE21); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const NetworkWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  @media only screen and (min-width: 1200px) {
    padding-top: 32px;
  }
`


const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`


const starsImage: CompositeImageProps = {
  path: '/images/abouts/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const getHeroHeading = () => {
    return (
      <TitleWrapper mb="24px" scale="xl" >vKnightHub {t('Network')}</TitleWrapper>          
    )
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb="8px" scale="lg" color="white" id="network-hero-title">
          {t('Blockchain And Crypto Knowledge For Everyone')}
        </Heading>
        {getHeroHeading()}
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="center"
        height={['192px', null, null, '100%']}
        width={['192px', null, null, '100%']}
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
      >
        <NetworkWrapper>
          <NetworkBackground width="100%" height="546" />
        </NetworkWrapper>
        <StarsWrapper>
          <CompositeImage {...starsImage} />
        </StarsWrapper>
      </Flex>
    </>
  )
}

export default Hero
