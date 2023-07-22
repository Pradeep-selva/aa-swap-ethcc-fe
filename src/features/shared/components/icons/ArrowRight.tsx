import React from 'react'

import { IconProps } from '.'

export default function ArrowRight({
  height = 16,
  width = 16,
  color = '#CBCED1'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13506_277946)">
        <path
          d="M10.6746 7.3335H2.66797V8.66683H10.6746V10.6668L13.3346 8.00016L10.6746 5.3335V7.3335Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_13506_277946">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
