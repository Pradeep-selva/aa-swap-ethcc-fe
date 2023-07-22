import styled, { css } from 'styled-components'
import { AAUiProgressBarProps } from '.'

type WrapperProps = Pick<AAUiProgressBarProps, 'height' | 'borderColor'>

type SecondaryMissingBarProps = Pick<
  AAUiProgressBarProps,
  'height' | 'value' | 'secondaryColor'
>

export const StyledAAUiProgressBar = styled.div<WrapperProps>`
  ${({ theme, borderColor }) => css`
    position: relative;
    display: flex;
    color: white;
    width: 100%;
    border-radius: 0.8rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0;
    background: ${borderColor};
    padding: 0.4rem;
    column-gap: 0.4rem;
  `}
`

export const Bar = styled.div<AAUiProgressBarProps>`
  ${({ color, value, height }) => css`
    width: ${`${value}%`};
    border-bottom: ${height}rem solid ${color};
    position: relative;
    border-radius: 0.8rem;
    height: 0.4rem;
  `}
`

export const SecondaryMissingBar = styled.div<SecondaryMissingBarProps>`
  ${({ theme, value, height, secondaryColor }) => css`
    width: ${`calc(100% - ${value}%)`};
    height: ${height}rem;
    border-radius: 0.8rem;
    background: ${secondaryColor};
  `}
`
