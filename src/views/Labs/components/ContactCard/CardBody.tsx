import { Box, CardBody } from '@vknighthub/uikit'
import { MetaRow } from './styles'
import { LabCardProps } from './types'

const LabCardBody: React.FC<LabCardProps> = ({ image, title, description }) => {

  return (
    <CardBody p="16px">
      <Box pb="16px">
        {image}
      </Box>
      <Box borderTop="1px solid" borderTopColor="cardBorder" p={['16px', '16px', '24px', "24px"]}>
        <MetaRow>
          {title}
        </MetaRow>
      </Box>
      <Box p={['16px', '16px', '24px', "24px"]}>
        <MetaRow>
          {description}
        </MetaRow>
      </Box>
    </CardBody>
  )
}

export default LabCardBody
