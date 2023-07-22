import React from 'react'
import { IconProps } from '.'

export default function NotificationDefaultIcon({
  height = 20,
  width = 20,
  color = '#6D7178'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10174_272135)">
        <path
          d="M9.9987 18.3333C10.9154 18.3333 11.6654 17.5833 11.6654 16.6666H8.33203C8.33203 17.5833 9.08203 18.3333 9.9987 18.3333ZM14.9987 13.3333V9.16658C14.9987 6.60825 13.6404 4.46659 11.2487 3.89992V3.33325C11.2487 2.64159 10.6904 2.08325 9.9987 2.08325C9.30703 2.08325 8.7487 2.64159 8.7487 3.33325V3.89992C6.36536 4.46659 4.9987 6.59992 4.9987 9.16658V13.3333L3.33203 14.9999V15.8333H16.6654V14.9999L14.9987 13.3333ZM13.332 14.1666H6.66536V9.16658C6.66536 7.09992 7.9237 5.41659 9.9987 5.41659C12.0737 5.41659 13.332 7.09992 13.332 9.16658V14.1666Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_10174_272135">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
