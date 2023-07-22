import React from 'react'

import { IconProps } from '.'

export default function DoneAllIcon({
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
      <g clipPath="url(#clip0_14000_276823)">
        <path
          d="M12.0001 4.66681L11.0601 3.72681L6.83344 7.95347L7.77344 8.89347L12.0001 4.66681ZM14.8268 3.72681L7.77344 10.7801L4.98677 8.00014L4.04677 8.94014L7.77344 12.6668L15.7734 4.66681L14.8268 3.72681ZM0.273438 8.94014L4.0001 12.6668L4.9401 11.7268L1.2201 8.00014L0.273438 8.94014Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_14000_276823">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
