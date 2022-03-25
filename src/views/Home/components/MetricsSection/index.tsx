import { useState, useEffect } from 'react'
import { Heading, Flex, Text, Grid } from '@vknighthub/uikit'
import { useTranslation } from 'contexts/Localization'
import { getLatestListedNfts, getNftsFromDifferentCollectionsApi } from 'state/nftMarket/helpers'
import { NftToken } from 'state/nftMarket/types'
import { pancakeBunniesAddress } from 'views/Nft/market/constants'
import { CollectibleLinkCard } from 'views/Nft/market/components/CollectibleCard'
import GridPlaceholder from 'views/Nft/market/components/GridPlaceholder'
import Particle from '../../../../components/Particle'

const useTopFourNfts = () => {
  const [newestNfts, setNewestNfts] = useState<NftToken[]>(null)

  useEffect(() => {
    const fetchNewestNfts = async () => {
      const nftsFromSg = await getLatestListedNfts(4)
      const nftsFromApi = await getNftsFromDifferentCollectionsApi(
        nftsFromSg.map((nft) => ({ collectionAddress: nft.collection.id, tokenId: nft.tokenId })),
      )

      const nfts = nftsFromSg
        .map((nftFromSg) => {
          const foundNftFromApi = nftsFromApi.find((nftFromApi) => nftFromApi.tokenId === nftFromSg.tokenId)
          if (foundNftFromApi) {
            return { ...foundNftFromApi, marketData: nftFromSg }
          }
          return null
        })
        .filter(Boolean)
      setNewestNfts(nfts)
    }
    fetchNewestNfts()
  }, [])

  return newestNfts
}

const Stats = () => {
  const { t } = useTranslation()
  const nfts = useTopFourNfts()

  return (
    <Particle>

      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading textAlign="center" scale="xl" color="primaryDark">
          {t('Top NFT Markets')}
        </Heading>
        <Text textAlign="center" color="textSubtle" bold my="32px">
          {t('Will you join them?')}
        </Text>

        <Flex flexDirection={['column', null, null, 'row']}>
        {nfts ? (
        <Grid
          gridRowGap="24px"
          gridColumnGap="16px"
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        >
          {nfts.map((nft) => {
            const isPBCollection = nft.collectionAddress.toLowerCase() === pancakeBunniesAddress.toLowerCase()
            const currentAskPrice =
              !isPBCollection && nft.marketData?.isTradable ? parseFloat(nft.marketData.currentAskPrice) : undefined
            return (
              <CollectibleLinkCard
                data-test="newest-nft-card"
                key={nft.collectionAddress + nft.tokenId}
                nft={nft}
                currentAskPrice={currentAskPrice}
              />
            )
          })}
        </Grid>
      ) : (
        <GridPlaceholder numItems={8} />
      )}
        </Flex>
      </Flex>
    </Particle>
  )
}

export default Stats
