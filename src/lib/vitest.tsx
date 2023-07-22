import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProviderContext } from '@/hooks/themeProvider'

const customRender = (ui: ReactElement, renderOptions?: RenderOptions) =>
  render(
    <ThemeProviderContext isDarkThemeDefault>{ui}</ThemeProviderContext>,
    renderOptions
  )

export * from 'vitest'
export { customRender as renderWithTheme }
