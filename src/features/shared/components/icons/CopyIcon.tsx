import React from 'react'

import { IconProps } from '.'

export default function CopyIcon({
  height = 16,
  width = 16,
  color = 'inherit',
  cursor = 'pointer',
  onClick
}: IconProps) {
  return (
    <svg
      onClick={onClick}
      cursor={cursor}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11019_14216)">
        <path
          d="M10.6654 0.666992H2.66536C1.93203 0.666992 1.33203 1.26699 1.33203 2.00033V11.3337H2.66536V2.00033H10.6654V0.666992ZM12.6654 3.33366H5.33203C4.5987 3.33366 3.9987 3.93366 3.9987 4.66699V14.0003C3.9987 14.7337 4.5987 15.3337 5.33203 15.3337H12.6654C13.3987 15.3337 13.9987 14.7337 13.9987 14.0003V4.66699C13.9987 3.93366 13.3987 3.33366 12.6654 3.33366ZM12.6654 14.0003H5.33203V4.66699H12.6654V14.0003Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_11019_14216">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
