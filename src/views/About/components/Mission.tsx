import styled, { keyframes } from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Flex, Heading, Button } from '@vknighthub/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

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

const MissionWrapper = styled.div`
    width: 100%;
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
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

const imagePath = '/images/abouts/mission/'
const imageSrc = 'mission'

const starsImage: CompositeImageProps = {
    path: '/images/abouts/',
    attributes: [
        { src: 'star-l', alt: '3D Star' },
        { src: 'star-r', alt: '3D Star' },
        { src: 'star-top-r', alt: '3D Star' },
    ],
}

const Mission = () => {
    const { t } = useTranslation()

    return (
        <>
        <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
            mt={['50px', null, 0]}
            id="homepage-hero"
        >
            <Flex flex="1" flexDirection="column">
            <Heading scale="xxl" color="primaryDark" mb="24px">
                {t('Our Mission')}
            </Heading>
            <Heading scale="md" mb="24px">
                {t('We provide a one-stop platform for users to access the DeFi ecosystem, such as decentralized exchanges, lending protocols, on-chain governance, blockchain-based games, and cross-chain transfer on over 20 networks such as Ethereum, Binance Smart Chain, Solana, Avalanche, and more.')}
            </Heading>
            
            </Flex>
            <Flex
                height={['192px', null, null, '100%']}
                width={['192px', null, null, '100%']}
                flex={[null, null, null, '1']}
                mb={['24px', null, null, '0']}
                position="relative"
            >
                <MissionWrapper>
                    <picture>
                    <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} />
                    <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} />
                    <img src={`${imagePath}${imageSrc}.png`} alt={t('Our Mission')} />
                    </picture>
                </MissionWrapper>
                <StarsWrapper>
                    <CompositeImage {...starsImage} />
                </StarsWrapper>
            </Flex>
        </Flex>
        </>
    )
}

export default Mission
