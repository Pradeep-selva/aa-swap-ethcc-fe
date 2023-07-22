import { getTheme } from '@/lib/styledComponents'
import React from 'react'
import styled, { css } from 'styled-components'

const theme = getTheme()

type NeonLightStrip = {
  color?: string
}

export const NeonLightStrippWrapper = styled.span<{ color?: string }>`
  ${({ color = theme.colors.console2 }) => css`
    position: absolute;
    width: 0.2rem;
    height: 100%;
    top: 0rem;
    left: 0;
    background: ${color};
    box-shadow: ${`2px 0px 5px 0.5px ${color}66`};
    -webkit-box-shadow: ${`2px 0px 5px 0.5px ${color}66`};
    -moz-box-shadow: ${`2px 0px 5px 0.5px ${color}66`};
  `}
`

export default function NeonLightStrip({ color }: NeonLightStrip) {
  return <NeonLightStrippWrapper color={color} />
}
