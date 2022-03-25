import {
  Box, Card, Flex,
  FlexProps, Text
} from '@vknighthub/uikit'
import styled from 'styled-components'


interface MetaRowProps extends FlexProps {
  title: string
}

export const MetaRow: React.FC<MetaRowProps> = ({ title, children, ...props }) => (
  <Flex alignItems="center" justifyContent="space-between" {...props}>
    <Text m="12px" fontSize="14px" color="textSubtle" maxWidth="120px" ellipsis title={title}>
      {title}
    </Text>
    <Box>{children}</Box>
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
