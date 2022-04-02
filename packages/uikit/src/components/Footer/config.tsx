import { Language } from "../LangSelector/types";
import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon } from "../Svg";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Help",
      items: [
        {
          label: "Customer",
          href: "Support https://docs.vknighthub.finance/contact-us/customer-support",
        },
        {
          label: "Troubleshooting",
          href: "https://docs.vknighthub.finance/help/troubleshooting",
        },
        {
          label: "Guides",
          href: "https://docs.vknighthub.finance/get-started",
        },
      ],
  },
  
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.vknighthub.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://vknighthub.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.vknighthub.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.vknighthub.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://vknighthub.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/vknighthub",
      },
      {
        label: "Documentation",
        href: "https://docs.vknighthub.finance",
      },
      {
        label: "Audits",
        href: "https://docs.vknighthub.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.vknighthub.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/vknighthub",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "Tiếng Việt",
        href: "https://t.me/vknighthub",
      },
    ],
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/vknighthub",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/vknighthub",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
