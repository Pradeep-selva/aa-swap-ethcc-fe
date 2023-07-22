import React from 'react'
import { IconProps } from '.'

export default function TooltipIcon({
  width = 20,
  height = 20,
  color = 'inherit',
  cursor = 'pointer'
}: IconProps) {
  return (
    <svg
      cursor={cursor}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3335 6.66659H10.6668V7.99992H9.3335V6.66659ZM9.3335 9.33325H10.6668V13.3333H9.3335V9.33325ZM10.0002 3.33325C6.32016 3.33325 3.3335 6.31992 3.3335 9.99992C3.3335 13.6799 6.32016 16.6666 10.0002 16.6666C13.6802 16.6666 16.6668 13.6799 16.6668 9.99992C16.6668 6.31992 13.6802 3.33325 10.0002 3.33325ZM10.0002 15.3333C7.06016 15.3333 4.66683 12.9399 4.66683 9.99992C4.66683 7.05992 7.06016 4.66659 10.0002 4.66659C12.9402 4.66659 15.3335 7.05992 15.3335 9.99992C15.3335 12.9399 12.9402 15.3333 10.0002 15.3333Z"
        fill={color}
      />
    </svg>
  )
}
