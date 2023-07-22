import React from 'react'
import styled, { css } from 'styled-components'

type StyledProgressBarBeamProps = {
  percentage: number
  color?: string
}

const StyledProgressBarBeam = styled.svg<StyledProgressBarBeamProps>`
  ${({ theme, percentage, color }) => css`
    position: absolute;
    top: 0px;
    left: calc(${percentage}% - 182px);
    transition: left 0.5s linear;
    filter: drop-shadow(0px 0px 5px ${color});
    background: linear-gradient(270deg, ${color} 0%, rgba(0, 0, 0, 0) 82.5%);
  `}
`

export default function ProgressBarBeam({
  percentage,
  color = '#b2f8ff'
}: StyledProgressBarBeamProps) {
  return (
    <StyledProgressBarBeam
      width="182"
      height="1"
      viewBox="0 0 182 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      percentage={percentage}
      color={color}
    >
      <rect
        width="182"
        height="1"
        rx="0.5"
        fill="url(#paint0_linear_10617_245269)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10617_245269"
          x1="182"
          y1="0.500021"
          x2="31.85"
          y2="0.499658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </StyledProgressBarBeam>
  )
}
