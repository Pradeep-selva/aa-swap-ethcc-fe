import React from 'react'
import { IconProps } from '.'

export default function ArrowCircleDown({
  width = 12,
  height = 12,
  color = '#A8ADB5'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15984_49632)">
        <path
          d="M6 2C8.205 2 10 3.795 10 6C10 8.205 8.205 10 6 10C3.795 10 2 8.205 2 6C2 3.795 3.795 2 6 2ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6.5 6V4H5.5V6H4L6 8L8 6H6.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_15984_49632">
          <rect width={12} height={12} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
