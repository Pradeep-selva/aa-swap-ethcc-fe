import React from 'react'

import { IconProps } from '.'

export default function SecurityIcon({
  height = 16,
  width = 16,
  color = '#B2F8FF'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15299_297398)">
        <path
          d="M8 0.666016L2 3.33268V7.33268C2 11.0327 4.56 14.4927 8 15.3327C11.44 14.4927 14 11.0327 14 7.33268V3.33268L8 0.666016ZM8 7.99268H12.6667C12.3133 10.7393 10.48 13.186 8 13.9527V7.99935H3.33333V4.19935L8 2.12602V7.99268Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_15299_297398">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
