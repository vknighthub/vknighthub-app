import {
  Box, Card, Flex
} from '@vknighthub/uikit'
import styled from 'styled-components'


export const MetaRow = ({ children, ...props }) => (
  <Flex alignItems="center" justifyContent="center" {...props}>
    <Box style={{textAlign: 'center'}} >{children}</Box>
  </Flex>
)

export const StyledCollectibleCard = styled(Card)`
  border-radius: 8px;
  max-width: 320px;
  transition: opacity 200ms;

  & > div {
    border-radius: 8px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`
