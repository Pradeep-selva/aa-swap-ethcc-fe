import React from 'react'

import { IconProps } from '.'
import { generateUUID } from '../../utils/actions'

export default function Arrows({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9802_222451)">
        <path
          d="M4.66 7.3335L2 10.0002L4.66 12.6668V10.6668H9.33333V9.3335H4.66V7.3335ZM14 6.00016L11.34 3.3335V5.3335H6.66667V6.66683H11.34V8.66683L14 6.00016Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={generateUUID()}>
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
