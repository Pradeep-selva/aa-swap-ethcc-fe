import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import RainbowWagmiProvider from '@/lib/rainbowWagmi'
import { ThemeProviderContext } from '@/hooks/themeProvider'
import { ErrorBoundary, Hotjar } from '@/features/shared'

const OG_TITLE = 'Abstract Swap'

//https://nextjs.org/docs/basic-features/layouts#per-page-layouts
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>{OG_TITLE}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <ErrorBoundary>
        <RainbowWagmiProvider>
          <ThemeProviderContext>
            <Hotjar />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProviderContext>
        </RainbowWagmiProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
