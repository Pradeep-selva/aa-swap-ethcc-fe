import React from 'react'
import { IconProps } from '.'

export default function SyncIcon({ width = 17, height = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16633_306234)">
        <path
          d="M8.33317 2.66791V0.667969L5.66659 3.33455L8.33317 6.00114V4.0012C10.5398 4.0012 12.333 5.79448 12.333 8.00108C12.333 8.67439 12.1664 9.31437 11.8664 9.86769L12.8397 10.841C13.3597 10.021 13.6663 9.04771 13.6663 8.00108C13.6663 5.0545 11.2797 2.66791 8.33317 2.66791ZM8.33317 12.001C6.12657 12.001 4.33329 10.2077 4.33329 8.00108C4.33329 7.32777 4.49995 6.68778 4.79994 6.13447L3.82664 5.16116C3.30666 5.98114 3 6.95444 3 8.00108C3 10.9477 5.38659 13.3342 8.33317 13.3342V15.3342L10.9998 12.6676L8.33317 10.001V12.001Z"
          fill="#A8ADB5"
        />
      </g>
      <defs>
        <clipPath id="clip0_16633_306234">
          <rect
            width="15.9995"
            height="15.9995"
            fill="white"
            transform="translate(0.332031)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
