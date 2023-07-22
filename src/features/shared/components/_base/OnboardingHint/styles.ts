import styled, { css } from 'styled-components'

export const StyledOnboardingHint = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 23.2rem;
    background: ${`${theme.colors.console2}1F`};
    border: 1px solid ${theme.colors.console2};
    border-radius: 0.8rem;
    padding: 1.2rem 1.2rem 1.2rem 1.6rem;
    gap: 1.6rem;
  `}
`

type ChipsProps = {
  darkAccent: boolean
}

export const Chips = styled.div<ChipsProps>`
  ${({ theme, darkAccent }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${darkAccent
      ? `${theme.colors.gray700}`
      : `${theme.colors.console2}1F`};
    color: ${theme.colors.console2};
    border-radius: 0.4rem;
    padding: 0rem 0.4rem;
  `}
`
