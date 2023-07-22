import React from 'react'
import { IconProps } from '.'

export default function TrendingUp({
  width = 16,
  height = 16,
  color = '#66DB94'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14305_281684)">
        <path
          d="M10.6654 4L12.192 5.52667L8.9387 8.78L6.27203 6.11333L1.33203 11.06L2.27203 12L6.27203 8L8.9387 10.6667L13.1387 6.47334L14.6654 8L14.6654 4L10.6654 4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_14305_281684">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 16)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
