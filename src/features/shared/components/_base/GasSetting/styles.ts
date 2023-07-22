import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 9.3rem;
    height: 3.6rem;
    cursor: pointer;
    justify-content: center;

    p {
      color: ${theme.colors.gray500};
      padding-bottom: 0.2rem;
      transition: color 300ms ease-out;
    }

    svg {
      transition: fill 300ms ease-out;
      fill: ${theme.colors.gray400};
      filter: ${`drop-shadow(0 0 0.5rem ${theme.colors.console2})`};
    }

    &:hover {
      p {
        color: ${theme.colors.gray200};
      }
    }
  `}
`
