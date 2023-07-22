import styled, { css } from 'styled-components'
import { customMedia } from '@/lib/styledComponents'

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.4rem;
    background: #080d1a;
    padding: 1.4rem 2.4rem;
    width: 100%;
    position: fixed;
    z-index: ${theme.layers.menu};

    ${customMedia.lessThan('small')`
      & > svg {
      min-width: 2rem;
    }

    padding: 1rem;
    width: 100%;
    background: #080d1a;
  `}

    a {
      text-decoration: none;
    }
  `}
`

export const MenuButtonWrapper = styled.div`
  display: none;
  ${customMedia.lessThan('small')`
     display:block;
     cursor:pointer;
  `}
`
