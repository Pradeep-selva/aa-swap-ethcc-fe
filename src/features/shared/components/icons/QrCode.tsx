import React from 'react'

import { IconProps } from '.'

export default function QrCode({
  width = 16,
  height = 16,
  color,
  onClick,
  cursor = 'default'
}: IconProps) {
  return (
    <svg
      cursor={cursor}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={color}
      onClick={onClick && onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11019_14225)">
        <path
          d="M2 7.33333H7.33333V2H2V7.33333ZM3.33333 3.33333H6V6H3.33333V3.33333Z"
          fill="inherit"
        />
        <path
          d="M2 14.0003H7.33333V8.66699H2V14.0003ZM3.33333 10.0003H6V12.667H3.33333V10.0003Z"
          fill="inherit"
        />
        <path
          d="M8.66797 2V7.33333H14.0013V2H8.66797ZM12.668 6H10.0013V3.33333H12.668V6Z"
          fill="inherit"
        />
        <path
          d="M14.0013 12.667H12.668V14.0003H14.0013V12.667Z"
          fill="inherit"
        />
        <path
          d="M10.0013 8.66699H8.66797V10.0003H10.0013V8.66699Z"
          fill="inherit"
        />
        <path d="M11.3333 10H10V11.3333H11.3333V10Z" fill="inherit" />
        <path
          d="M10.0013 11.333H8.66797V12.6663H10.0013V11.333Z"
          fill="inherit"
        />
        <path d="M11.3333 12.667H10V14.0003H11.3333V12.667Z" fill="inherit" />
        <path
          d="M12.6654 11.333H11.332V12.6663H12.6654V11.333Z"
          fill="inherit"
        />
        <path
          d="M12.6654 8.66699H11.332V10.0003H12.6654V8.66699Z"
          fill="inherit"
        />
        <path d="M14.0013 10H12.668V11.3333H14.0013V10Z" fill="inherit" />
      </g>
      <defs>
        <clipPath id="clip0_11019_14225">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
