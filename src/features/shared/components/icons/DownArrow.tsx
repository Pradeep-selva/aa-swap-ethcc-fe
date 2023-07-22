import React from 'react'

import { IconProps } from '.'

export default function DownArrow({
  height = 16,
  width = 16,
  cursor,
  color = '#6D7178',
  onClick
}: IconProps) {
  return (
    <svg
      cursor={cursor}
      onClick={onClick}
      width={height}
      height={width}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0658 3.24512L10.9508 4.13012L6.00078 9.08012L1.05078 4.13012L1.93578 3.24512L6.00078 7.31012L10.0658 3.24512Z"
        fill={color}
      />
    </svg>
  )
}
