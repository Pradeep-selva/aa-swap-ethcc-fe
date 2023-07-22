import React from 'react'
import { IconProps } from '..'

export default function FeaturesIcon({ width = 21, height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15856_304820)">
        <path
          d="M18.0003 3.33301H3.00033C2.54199 3.33301 2.16699 3.70801 2.16699 4.16634V15.833C2.16699 16.2913 2.54199 16.6663 3.00033 16.6663H18.0003C18.4587 16.6663 18.8337 16.2913 18.8337 15.833V4.16634C18.8337 3.70801 18.4587 3.33301 18.0003 3.33301ZM7.16699 14.9997H3.83366V4.99967H7.16699V14.9997ZM12.167 14.9997H8.83366V4.99967H12.167V14.9997ZM17.167 14.9997H13.8337V4.99967H17.167V14.9997Z"
          fill="#B2F8FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_15856_304820">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
