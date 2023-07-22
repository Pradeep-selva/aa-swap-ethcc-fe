import React from 'react'
import { IconProps } from '.'

export default function RiskIcon({
  width = 10,
  height = 18,
  color = '#EE350D'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.832031 0.666992V9.83366H3.33203V17.3337L9.16536 7.33366H5.83203L8.33203 0.666992H0.832031Z"
        fill={color}
      />
    </svg>
  )
}
