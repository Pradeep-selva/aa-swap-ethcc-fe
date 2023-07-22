import React from 'react'

import { IconProps } from '..'

export default function RoadmapIcon({ height = 20, width = 20 }: IconProps) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18831_330379)">
        <path
          d="M16.6676 14.998V12.498H15.001V14.998H12.501V16.6647H15.001V19.1647H16.6676V16.6647H19.1676V14.998H16.6676Z"
          fill="#B2F8FF"
        />
        <path
          d="M16.6676 3.33203H15.001V10.832H16.6676V3.33203Z"
          fill="#B2F8FF"
        />
        <path
          d="M5.00065 3.33203H3.33398V16.6654H5.00065V3.33203Z"
          fill="#B2F8FF"
        />
        <path
          d="M10.8337 3.33203H9.16699V6.66536H10.8337V3.33203Z"
          fill="#B2F8FF"
        />
        <path
          d="M10.8337 8.33203H9.16699V11.6654H10.8337V8.33203Z"
          fill="#B2F8FF"
        />
        <path
          d="M10.8337 13.332H9.16699V16.6654H10.8337V13.332Z"
          fill="#B2F8FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_18831_330379">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
