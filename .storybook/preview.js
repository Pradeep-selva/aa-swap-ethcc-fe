import { ThemeProviderContext } from '../src/hooks/themeProvider'
import RainbowWagmiProvider from '@/lib/rainbowWagmi'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story, context) => (
    <RainbowWagmiProvider>
      <ThemeProviderContext isDarkThemeDefault={true}>
        <Story />
      </ThemeProviderContext>
    </RainbowWagmiProvider>
  )
]
