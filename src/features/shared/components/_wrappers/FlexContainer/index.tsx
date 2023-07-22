import { opacityIn } from '@/features/shared/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type FlexContainerProps = {
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit'

  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'

  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'

  gap?: number
  mobileGap?: number
  flex?: boolean
  width?: number
  padding?: string
  style?: Record<string, string>
  opacityInEffect?: boolean
}

const FlexContainer = styled.div<FlexContainerProps>`
  ${({
    flexDirection = 'row',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    flex = true,
    gap,
    mobileGap,
    width,
    padding,
    style,
    opacityInEffect = false
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    ${flex && 'flex: 1'};
    ${!!gap && `gap: ${gap}rem`};
    ${width && `width: ${width}%`};
    ${padding && `padding: ${padding}`};
    ${opacityInEffect && opacityIn(0.5)};
    ${!!style && style};

    ${media.lessThan('medium')`
       ${!!mobileGap && `gap: ${mobileGap}rem`};
    `}
  `}
`

export default FlexContainer
