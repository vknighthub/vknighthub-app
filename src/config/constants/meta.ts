import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'vKnightHub',
  description:
    'The most popular AMM on BSC by user count! Earn through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by vKnightHub), NFTs, and more, on a platform you can trust.',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('vKnightHub')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('vKnightHub')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('vKnightHub')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('vKnightHub')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('vKnightHub')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('vKnightHub')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('vKnightHub')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('vKnightHub')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('vKnightHub')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('vKnightHub')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('vKnightHub')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('vKnightHub')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('vKnightHub')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('vKnightHub')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('vKnightHub')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('vKnightHub')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('vKnightHub')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('vKnightHub')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('vKnightHub Info & Analytics')}`,
        description: 'View statistics for vKnightHub exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('vKnightHub Info & Analytics')}`,
        description: 'View statistics for vKnightHub exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('vKnightHub Info & Analytics')}`,
        description: 'View statistics for vKnightHub exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('vKnightHub')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('vKnightHub')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('vKnightHub')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('vKnightHub')}`,
      }
    case '/network':
        return {
          title: `${t('Network')} | ${t('vKnightHub')}`,
        }
    case '/labs':
          return {
            title: `${t('Labs')} | ${t('vKnightHub')}`,
          }
    default:
      return null
  }
}
