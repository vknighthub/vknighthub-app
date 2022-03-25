import { createGlobalStyle } from 'styled-components'
import { VknighthubTheme } from '@vknighthub/uikit'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends VknighthubTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Quicksand', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
