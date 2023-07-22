import styled, { css } from 'styled-components'
import { ChildPositionProps } from '.'

export const StyledModalSlideInWrapper = styled.div<{
  childPosition?: ChildPositionProps
}>`
  ${({ childPosition }) => css`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100%;

    ${childPosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `}
  `}
`

export const Content = styled.div<{
  isOpen: boolean
  childPosition?: ChildPositionProps
}>`
  ${({ theme, isOpen, childPosition }) => css`
    transition: transform ${theme.transition.default};
    transform: ${isOpen ? 'translateX(0rem)' : 'translateX(-20rem)'};

    ${childPosition === 'right' &&
    css`
      transform: ${isOpen ? 'translateX(0rem)' : 'translateX(20rem)'};
    `}
  `}
`
