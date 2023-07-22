import React from 'react'
import styled from 'styled-components'
import { IconProps } from '..'

const SvgWrapper = styled.svg`
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
export default function TabIndicator({
  width = 8,
  height = 8,
  stroke = '#494C56'
}: IconProps & { stroke?: string }) {
  return (
    <SvgWrapper
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.64645 1.06066C3.84171 0.865398 4.15829 0.865398 4.35355 1.06066L4.70711 0.707107L4.35355 1.06066L6.93934 3.64645C7.1346 3.84171 7.1346 4.15829 6.93934 4.35355L4.35355 6.93934C4.15829 7.1346 3.84171 7.1346 3.64645 6.93934L1.06066 4.35355C0.865398 4.15829 0.865398 3.84171 1.06066 3.64645L3.64645 1.06066Z"
        stroke={stroke}
      />
    </SvgWrapper>
  )
}
