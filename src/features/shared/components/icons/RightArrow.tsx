import React from 'react'
import { IconProps } from '.'

export default function RightArrow({
  width = 16,
  height = 16,
  color = '#CBCED1',
  onClick,
  cursor
}: IconProps) {
  return (
    <svg
      cursor={cursor}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(90deg)' }}
    >
      <path
        d="M2.57766 11.6733L1.39766 10.4933L7.99766 3.89334L14.5977 10.4933L13.4177 11.6733L7.99766 6.25334L2.57766 11.6733Z"
        fill={color}
      />
    </svg>
  )
}
