import React from 'react'

import { IconProps } from '.'

export default function LighteningIcon({
  height = 12,
  width = 6,
  color = '#FFAD0D'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.4 11.6001L6 4.8001H3.488V0.400099L4.76837e-07 7.2001H2.4V11.6001Z"
        fill={color}
      />
    </svg>
  )
}
