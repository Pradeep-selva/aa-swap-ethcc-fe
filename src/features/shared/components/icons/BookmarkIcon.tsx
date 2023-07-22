import React from 'react'

import { IconProps } from '.'

export default function BookmarkIcon({
  width = 20,
  height = 20,
  color = '#B2F8FF'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16978_339247)">
        <path
          d="M14.168 2.5H5.83464C4.91797 2.5 4.16797 3.25 4.16797 4.16667V17.5L10.0013 15L15.8346 17.5V4.16667C15.8346 3.25 15.0846 2.5 14.168 2.5ZM14.168 15L10.0013 13.1833L5.83464 15V4.16667H14.168V15Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_16978_339247">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
