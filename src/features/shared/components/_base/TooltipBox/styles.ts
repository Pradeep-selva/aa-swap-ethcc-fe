import styled, { css } from 'styled-components'
import { Theme } from '@/lib/styledComponents'

export const StyledTooltipBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > div:first-of-type {
    transition-delay: 0s;
    opacity: 100;
    visibility: visible;
  }
`

type tooltipDirection = 'top' | 'bottom' | 'left' | 'right'

export type ContentWrapperProps = {
  direction?: tooltipDirection
  delayToCloseInSeconds?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  tooltipWidth?: number
}

const selectStyle: { [key in tooltipDirection]: any } = {
  top: () => css`
    bottom: 5rem;
  `,
  right: () => css`
    left: 4rem;
  `,

  bottom: () => css`
    top: 5rem;
  `,

  left: () => css`
    right: 2.5rem;
    top: -2rem;
  `
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({
    theme,
    direction,
    top,
    bottom,
    left,
    right,
    tooltipWidth,
    delayToCloseInSeconds
  }) => css`
    opacity: 0;
    visibility: hidden;
    width: ${tooltipWidth}rem;
    height: fit-content;
    background-color: ${theme.colors.gray700}CC;
    border-radius: 0.4rem;
    padding: 0.8rem 1.2rem;
    position: absolute;
    z-index: ${theme.layers.overlay};
    transition: ${delayToCloseInSeconds &&
    `all 0.2s ease ${delayToCloseInSeconds}s`};

    top: ${top}rem;
    bottom: ${bottom}rem;
    left: ${left}rem;
    right: ${right}rem;
    ${direction && selectStyle[direction]()};
  `}
`
