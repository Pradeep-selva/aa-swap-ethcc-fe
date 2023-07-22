import React from 'react'

import { IconProps } from '.'

export default function StarIcon({
  width = 16,
  height = 16,
  color
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11019_14203)">
        <path
          d="M14.6654 6.15967L9.87203 5.74634L7.9987 1.33301L6.12536 5.75301L1.33203 6.15967L4.97203 9.31301L3.8787 13.9997L7.9987 11.513L12.1187 13.9997L11.032 9.31301L14.6654 6.15967ZM7.9987 10.2663L5.49203 11.7797L6.1587 8.92634L3.94536 7.00634L6.86537 6.75301L7.9987 4.06634L9.1387 6.75968L12.0587 7.01301L9.84537 8.93301L10.512 11.7863L7.9987 10.2663Z"
          fill={color || 'inherit'}
        />
      </g>
      <defs>
        <clipPath id="clip0_11019_14203">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
