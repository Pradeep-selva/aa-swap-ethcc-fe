import React from 'react'
import { IconProps } from '.'

export default function Undo({
  width = 16,
  height = 16,
  color = 'inherit'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9857_224808)">
        <path
          d="M7.66797 5.33366C9.43464 5.33366 11.0346 5.99366 12.268 7.06699L14.668 4.66699V10.667H8.66797L11.0813 8.25366C10.1546 7.48033 8.97464 7.00033 7.66797 7.00033C5.30797 7.00033 3.3013 8.54033 2.6013 10.667L1.0213 10.147C1.94797 7.35366 4.56797 5.33366 7.66797 5.33366Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9857_224808">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(-1 0 0 1 16 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
