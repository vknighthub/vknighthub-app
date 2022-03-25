import { Box, CardBody, Text } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import { MetaRow } from './styles'
import { ContactCardProps } from './types'

const ContactCardBody: React.FC<ContactCardProps> = ({ type, address }) => {
  const { t } = useTranslation()

  return (
    <CardBody p="8px">
      <Text textAlign="center" as="h3" fontWeight="600" my="14px">
        {type}
      </Text>
      <Box borderTop="1px solid" borderTopColor="cardBorder" pt="8px">
        <MetaRow title={t('Address:')}>
          {address}
        </MetaRow>
      </Box>
    </CardBody>
  )
}

export default ContactCardBody
