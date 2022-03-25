import { CardProps, SvgProps } from '@vknighthub/uikit'

export interface LabCardProps extends CardProps {
  image: SvgProps;
  title: string
  description: string;
  link?: string;
}
