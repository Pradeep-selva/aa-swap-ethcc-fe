import { opacityIn, styleScrollbar } from '@/features/shared'
import styled, { css } from 'styled-components'

export const OnboardStepLayoutWrapper = styled.div<{
  padding?: string
}>`
  ${({ theme, padding = '0rem 0rem 6rem 0' }) => css`
    ${opacityIn(0.5)};
    display: flex;
    flex-direction: column;
    padding: ${padding};
    height: 58rem;
    width: 100%;
    margin-bottom: 2rem;
    overflow-y: auto;
    ${styleScrollbar(theme)};

    @media (max-height: 900px) {
      max-width: 100vw;
      height: 40rem;
      margin-left: 10vw;
    }
  `}
`

export const OnboardStepTitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.neue};
    font-weight: ${theme.font.medium};
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: ${theme.colors.console2};

    background-clip: text;
    mix-blend-mode: normal;
    margin-bottom: 1.2rem;
    /* margin-top: 3.6rem; */
  `}
`
