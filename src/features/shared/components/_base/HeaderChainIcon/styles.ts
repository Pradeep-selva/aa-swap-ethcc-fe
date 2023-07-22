import styled, { css } from 'styled-components'
import { customMedia } from '@/lib/styledComponents'

export const HeaderChainIconWrapper = styled.div`
  ${customMedia.lessThan('medium')`
      display:none
    `}
`

export const StyledHeaderChainIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 1rem;
    height: 3.6rem;
    background-color: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.4rem;
    transition: border-color ${theme.transition.default};

    &:hover,
    &:active {
      border: 1px solid ${theme.colors.gray500};
    }
  `}
`
