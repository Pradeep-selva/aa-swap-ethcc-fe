import React from 'react'
import { IconProps } from '.'

export default function TextFormatIcon({
  height = 16,
  width = 16,
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
      <g clipPath="url(#clip0_11385_3711)">
        <path
          d="M3.33301 11.3333V12.6667H12.6663V11.3333H3.33301ZM6.33301 8.53332H9.66634L10.2663 9.99999H11.6663L8.49967 2.66666H7.49967L4.33301 9.99999H5.73301L6.33301 8.53332ZM7.99967 3.98666L9.24634 7.33332H6.75301L7.99967 3.98666Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_11385_3711">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
