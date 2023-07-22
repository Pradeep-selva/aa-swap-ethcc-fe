import { opacityIn } from '@/features/shared/styles'
import styled, { css } from 'styled-components'

export const EasterWrapper = styled.div`
  ${({ theme }) => css`
    ${opacityIn(0.5)}
    display: flex;
    position: absolute;
    right: -10rem;
    bottom: -6rem;
    background-color: ${theme.colors.gray700};
    border-radius: 0.4rem;
    padding: 0.8rem 1.2rem;
    width: 24rem;
  `}
`
