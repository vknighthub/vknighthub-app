import { FooterLinkType } from '@vknighthub/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Ecosystem'),
    items: [
      {
        label: t('vKnightHub Token'),
        href: 'https://',
      },
      {
        label: t('vKnightHub Network'),
        href: '/network',
      },
      {
        label: t('vKnightHub Labs'),
        href: '/labs',
      },
    ],
  },

  {
    label: t('About Us'),
    items: [
      {
        label: t('Company'),
        href: '/about',
      },
      {
        label: t('Communities'),
        href: 'https://',
      },
      {
        label: t('Blog'),
        href: 'https://',
      },
      {
        label: t('Terms Of Service'),
        href: 'https://',
      },
      {
        label: t('Privacy Policy'),
        href: 'https://',
      },
      {
        label: '—',
      },
      {
        label: t('Careers'),
        href: 'https://',
        isHighlighted: true,
      },
    ],
  },
  
  {
    label: t('Support'),
    items: [
      {
        label: t('Guides'),
        href: 'https://',
      },
      {
        label: t('FAQs'),
        href: 'https://',
      },
      {
        label: t('Email Us'),
        href: 'mailto: support@vknight.io',
      },
    ],
  },

  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://',
      },
      {
        label: t('Documentation'),
        href: 'https://',
      },
      {
        label: t('Audits'),
        href: 'https://',
      },
      {
        label: t('Exchange'),
        href: 'https://',
      },
    ],
  },
]
