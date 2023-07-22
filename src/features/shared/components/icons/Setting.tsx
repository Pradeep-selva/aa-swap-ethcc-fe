import React from 'react'

import { IconProps } from '.'

export default function Setting({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10807_251368)">
        <path
          d="M18.3346 15.0002V13.3335H6.66797V3.3335H8.33464L5.83464 0.833496L3.33464 3.3335H5.0013V5.00016H1.66797V6.66683H5.0013V13.3335C5.0013 14.2502 5.7513 15.0002 6.66797 15.0002H13.3346V16.6668H11.668L14.168 19.1668L16.668 16.6668H15.0013V15.0002H18.3346ZM8.33464 6.66683H13.3346V11.6668H15.0013V6.66683C15.0013 5.75016 14.2513 5.00016 13.3346 5.00016H8.33464V6.66683Z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="clip0_10807_251368">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
