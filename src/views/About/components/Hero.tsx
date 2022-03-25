import { Flex, Heading } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import styled, { keyframes } from 'styled-components'
import CompositeImage, { CompositeImageProps, getSrcSet } from './CompositeImage'

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

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 592px;
  max-height: 592px;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
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

const imagePath = '/images/abouts/'
const imageSrc = 'about'


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
      <TitleWrapper mb="24px" scale="xl" >vKnightHub {t(' About')}</TitleWrapper>          
    )
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb="8px" scale="lg" color="white" id="about-hero-title">
          {t('A DeFi Gateway for TraFi users to access any DeFi services on multiple blockchains')}
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
        <AboutWrapper>
          <picture>
            <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} />
            <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} />
            <img src={`${imagePath}${imageSrc}.png`} alt={t('Lunar bunny')} />
          </picture>
        </AboutWrapper>
        <StarsWrapper>
          <CompositeImage {...starsImage} />
        </StarsWrapper>
      </Flex>
    </>
  )
}

export default Hero
