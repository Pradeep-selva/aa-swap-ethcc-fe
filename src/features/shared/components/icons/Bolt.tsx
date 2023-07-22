import React from 'react'

import { IconProps } from '.'

export default function BoltIcon({
  width = 16,
  height = 16,
  color = '#6D7178'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9824_220823)">
        <path
          d="M8.00099 1.34668C4.32766 1.34668 1.34766 4.32668 1.34766 8.00001C1.34766 11.6733 4.32766 14.6533 8.00099 14.6533C11.6743 14.6533 14.6543 11.6733 14.6543 8.00001C14.6543 4.32668 11.6743 1.34668 8.00099 1.34668ZM8.00099 13.32C5.06766 13.32 2.68099 10.9333 2.68099 8.00001C2.68099 5.06668 5.06766 2.68001 8.00099 2.68001C10.9343 2.68001 13.321 5.06668 13.321 8.00001C13.321 10.9333 10.9343 13.32 8.00099 13.32ZM8.50099 3.33335L5.50099 9.00001H7.59432V12.6667L10.501 7.00001H8.50099V3.33335Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9824_220823">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
