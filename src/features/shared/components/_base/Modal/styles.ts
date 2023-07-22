import styled, { css } from 'styled-components'
import { opacityIn } from '../../../styles'

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    ${opacityIn(0.25)};
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: ${theme.layers.menu};
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `}
`

export const ModalContent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 28%;
  `}
`
