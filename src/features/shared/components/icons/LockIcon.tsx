import React from 'react'

import { IconProps } from '.'

export default function LockIcon({
  height = 12,
  width = 12,
  color = 'inherit'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12317_258158)">
        <path
          d="M9 4H8.5V3C8.5 1.62 7.38 0.5 6 0.5C4.62 0.5 3.5 1.62 3.5 3V4H3C2.45 4 2 4.45 2 5V10C2 10.55 2.45 11 3 11H9C9.55 11 10 10.55 10 10V5C10 4.45 9.55 4 9 4ZM4.5 3C4.5 2.17 5.17 1.5 6 1.5C6.83 1.5 7.5 2.17 7.5 3V4H4.5V3ZM9 10H3V5H9V10ZM6 8.5C6.55 8.5 7 8.05 7 7.5C7 6.95 6.55 6.5 6 6.5C5.45 6.5 5 6.95 5 7.5C5 8.05 5.45 8.5 6 8.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_12317_258158">
          <rect width={12} height={12} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
