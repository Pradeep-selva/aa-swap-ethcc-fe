import styled, { css } from 'styled-components'
import { opacityIn } from '@/features/shared/styles'

export type StyledAddressCopiedTagProps = {
  isAbsolute?: boolean
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export const StyledAddressCopiedTag = styled.div<StyledAddressCopiedTagProps>`
  ${({ isAbsolute, top, bottom, left, right }) => css`
    ${opacityIn(0.5)};
    width: 100%;

    ${isAbsolute &&
    css`
      position: absolute;
      top: ${top ? `${top}rem` : 'auto'};
      bottom: ${bottom ? `${bottom}rem` : 'auto'};
      left: ${left ? `${left}rem` : 'auto'};
      right: ${right ? `${right}rem` : 'auto'};
    `};
  `}
`
