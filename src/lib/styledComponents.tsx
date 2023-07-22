import { createGlobalStyle, ServerStyleSheet } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { neueBold, neueMedium, neueRegular } from './fonts'

interface theme {
  dark: boolean
}

function colors(darkMode = true) {
  return {
    primary: '#93A7E3',
    console: '#5AEDFC',
    console2: '#B2F8FF',
    aaveGho: '#D4CDEA',
    topgear: '#FF86D1',
    bgGradient:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #090f21;',
    success: '#66DB94',
    error: '#F45562',
    warning: '#FFAD0D',
    white: '#FFFFFF',
    black: '#000',
    gray100: '#E6E8ED',
    gray200: '#DEE0E3',
    gray300: '#CBCED1',
    gray400: '#A8ADB5',
    gray500: '#6D7178',
    gray600: '#494C56',
    gray700: '#292930',
    gray800: '#18181C',
    gray900: '#0D0D10',
    light500: '#A3A3A3',
    mainBg: '#090f21'
  }
}

function getTheme(darkMode = true) {
  return {
    grid: {
      container: '130rem',
      gutter: '3.2rem'
    },
    border: {
      radius: '0.2rem',
      color: darkMode ? '#292930' : '#E8E8E8'
    },
    font: {
      family: {
        neue: "Neue Montreal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        coanda: 'Coanda'
      },
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      sizes: {
        xxsmall: '1.4rem',
        xsmall: '1.8rem',
        small: '2rem',
        medium: '3rem',
        large: '7rem',
        xlarge: '12rem',
        xxlarge: '20rem',
        huge: '23rem',
        mobile: {
          xsmall: '1.6rem',
          small: '2rem',
          medium: '3.6rem',
          large: '5rem',
          xlarge: '8rem'
        }
      }
    },
    colors: colors(darkMode),
    spacings: {
      xxsmall: '0.8rem',
      xsmall: '1.6rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '5.6rem'
    },
    layers: {
      base: 10,
      menu: 20,
      overlay: 30,
      modal: 40,
      alwaysOnTop: 50
    },
    transition: {
      default: '0.3s ease-in-out',
      fast: '0.1s ease-in-out',
      long: '0.7s ease-in-out'
    }
  } as const
}

const defaultTheme = getTheme(true)

const customMediaBreakpoints = {
  huge: 1600,
  large: 1200,
  medium: 950,
  small: 700
} as const

const customMedia = generateMedia({
  huge: `${customMediaBreakpoints.huge}px`,
  large: `${customMediaBreakpoints.large}px`,
  medium: `${customMediaBreakpoints.medium}px`,
  small: `${customMediaBreakpoints.small}px`
})

export type Theme = typeof defaultTheme
export {
  defaultTheme,
  getTheme,
  ServerStyleSheet,
  customMedia,
  customMediaBreakpoints
}

const GlobalStyles = createGlobalStyle<theme>`
   @font-face {
        font-family: ${neueRegular.style.fontFamily}; 
        font-style: ${neueRegular.style.fontStyle};
        font-weight: ${neueRegular.style.fontWeight};
        font-display: swap;
        src: local('Neue Montreal Regular'), local('Neue-Montreal-Regular'),
            url('${'../fonts/NeueMontreal-Regular.woff2'}') format('woff2');
    }

    @font-face {
        font-family: ${neueMedium.style.fontFamily};
        font-style: ${neueMedium.style.fontStyle};
        font-weight: ${neueMedium.style.fontWeight};
        font-display: swap;
        src: local('Neue Montreal Medium'), local('Neue-Montreal-Medium'),
            url('${'../fonts/NeueMontreal-Medium.woff2'}') format('woff2');
    }

    @font-face {
        font-family: ${neueBold.style.fontFamily};
        font-style: ${neueBold.style.fontStyle};
        font-weight: ${neueBold.style.fontWeight};
        font-display: swap;
        src: local('Neue Montreal Bold'), local('Neue-Montreal-Bold'),
            url('${'../fonts/NeueMontreal-Bold.woff2'}') format('woff2');
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* background: #090f21; */
        color: white;
        scroll-behavior: smooth!important;
        
        &::before, &::after {
          box-sizing: inherit;
        }
      }

    html {
        font-size: 62.5%;
      }

    body {
      background-color: #090f21;
    }

    
  `

export default GlobalStyles
