import React from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

import { IconProps } from '.'

export default function SendIcon({
  height = 16,
  width = 16,
  color = '#B2F8FF'
}: IconProps) {
  return (
    <SVGUniqueID>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17242_347313)">
          <path
            d="M2.67203 4.02L7.6787 6.16667L2.66536 5.5L2.67203 4.02V4.02ZM7.67203 9.83333L2.66536 11.98V10.5L7.67203 9.83333V9.83333ZM1.3387 2L1.33203 6.66667L11.332 8L1.33203 9.33333L1.3387 14L15.332 8L1.3387 2Z"
            fill="#B2F8FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_17242_347313">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SVGUniqueID>
  )
}
