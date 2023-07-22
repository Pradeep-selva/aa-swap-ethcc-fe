import React from 'react'
import { IconProps } from '.'

export default function Chevron({
  width = 16,
  height = 16,
  color = 'inherit',
  onClick
}: IconProps) {
  return (
    <svg
      onClick={onClick && onClick}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <g clipPath="url(#clip0_10368_244580)">
        <path
          d="M11.6745 2.57941L10.4879 1.39941L3.89453 7.99941L10.4945 14.5994L11.6745 13.4194L6.25453 7.99941L11.6745 2.57941Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_10368_244580">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
