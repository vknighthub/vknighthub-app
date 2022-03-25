import { NextLinkFromReactRouter } from 'components/NextLink'
import CardBody from './CardBody'
import { StyledCollectibleCard } from './styles'
import { ContactCardProps } from './types'

const ContactCard: React.FC<ContactCardProps> = ({ type, address }) => {
    return (
        <StyledCollectibleCard>
            <NextLinkFromReactRouter to="/">
                <CardBody type={type} address={address} />
            </NextLinkFromReactRouter>
        </StyledCollectibleCard>
    )
}

export default ContactCard
