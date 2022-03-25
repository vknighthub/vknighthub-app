import { Heading, Flex } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useMemo } from 'react'
import { useAllTokenData } from 'state/info/hooks'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'

const TopToken = () => {
  const { t } = useTranslation()
  const { observerRef } = useIntersectionObserver()

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => token.data)
      .filter((token) => token)
  }, [allTokens])
  
  return (
    <div ref={observerRef}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading textAlign="center" scale="xl" mb="32px" color="primaryDark">
          {t('Top Token')}
        </Heading>
        <TokenTable tokenDatas={formattedTokens} />
      </Flex>
    </div>
  )
}

export default TopToken