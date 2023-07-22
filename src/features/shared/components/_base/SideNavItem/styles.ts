import styled, { css } from 'styled-components'
import { fadeInFromLeft } from '../../../styles'

type MainWrapperProps = {
  selected: boolean
}

export const MainWrapper = styled.div<MainWrapperProps>`
  ${({ theme, selected }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    height: 4.4rem;
    padding: 0 0.8rem;
    width: 100%;
    cursor: pointer;

    p {
      ${fadeInFromLeft(0.35)};
      color: ${selected ? theme.colors.gray200 : theme.colors.gray400};
      padding-bottom: 0.2rem;
      transition: color 300ms ease-out;
    }

    svg {
      min-width: 1.6rem;
      transition: fill 300ms ease-out;
      fill: ${selected ? theme.colors.console2 : theme.colors.gray600};
      filter: ${selected && `drop-shadow(0 0 5px ${theme.colors.console2})`};
    }

    &:hover {
      p {
        color: ${theme.colors.gray200};
      }

      svg {
        fill: ${!selected && theme.colors.gray400};
      }
    }
  `}
`
