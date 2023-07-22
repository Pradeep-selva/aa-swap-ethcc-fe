import React from 'react'
import { IconProps } from '.'

export default function MenuIcon({
  height = 20,
  width = 20,
  color = '#B2F8FF',
  onClick
}: IconProps) {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 15H17.4999V13.3333H2.5V15ZM2.5 10.8333H17.4999V9.16665H2.5V10.8333ZM2.5 5V6.66666H17.4999V5H2.5Z"
        fill={color}
      />
    </svg>
  )
}
