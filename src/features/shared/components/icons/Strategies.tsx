import React from 'react'

import { IconProps } from '.'

export default function StrategiesIcon({
  height = 16,
  width = 16,
  color
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9509_300314)">
        <path
          d="M2.5 1.6665V11.6665H5V19.1665L10.8333 9.1665H7.5L10.8333 1.6665H2.5ZM15.8333 1.6665H14.1667L11.5 9.1665H13.0833L13.6667 7.49984H16.3333L16.9167 9.1665H18.5L15.8333 1.6665ZM14.0417 6.37484L15 3.33317L15.9583 6.37484H14.0417Z"
          fill={color ? color : 'inherit'}
        />
      </g>
      <defs>
        <clipPath id="clip0_9509_300314">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
