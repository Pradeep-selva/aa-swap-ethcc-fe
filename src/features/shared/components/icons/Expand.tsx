import React from 'react'

import { IconProps } from '.'

export default function Expand({
  height = 16,
  width = 16,
  color = 'inherit'
}: IconProps) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12001_22498)">
        <path
          d="M15.832 10H14.1654V12.5H11.6654V14.1667H15.832V10ZM5.83203 7.5H8.33203V5.83333H4.16536V10H5.83203V7.5ZM17.4987 2.5H2.4987C1.58203 2.5 0.832031 3.25 0.832031 4.16667V15.8333C0.832031 16.75 1.58203 17.5 2.4987 17.5H17.4987C18.4154 17.5 19.1654 16.75 19.1654 15.8333V4.16667C19.1654 3.25 18.4154 2.5 17.4987 2.5ZM17.4987 15.8417H2.4987V4.15833H17.4987V15.8417Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_12001_22498">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
