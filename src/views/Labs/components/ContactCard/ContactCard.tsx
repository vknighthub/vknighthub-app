import { NextLinkFromReactRouter } from 'components/NextLink'
import CardBody from './CardBody'
import { StyledCollectibleCard } from './styles'
import { LabCardProps } from './types'

const LabCard: React.FC<LabCardProps> = ({ image, title, description, link }) => {
    return (
        <StyledCollectibleCard>
            <NextLinkFromReactRouter to={`/${link}`}>
                <CardBody title={title} description={description} image={image} />
            </NextLinkFromReactRouter>
        </StyledCollectibleCard>
    )
}

export default LabCard
