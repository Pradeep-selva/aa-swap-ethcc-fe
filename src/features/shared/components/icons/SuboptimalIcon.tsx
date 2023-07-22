import React from 'react'
import { IconProps } from '.'

export default function SuboptimalIcon({
  width = 20,
  height = 10,
  color = '#DCAC00'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16536 1.66667C2.3237 1.66667 0.832031 3.15833 0.832031 5C0.832031 6.84167 2.3237 8.33333 4.16536 8.33333C6.00703 8.33333 7.4987 6.84167 7.4987 5C7.4987 3.15833 6.00703 1.66667 4.16536 1.66667ZM14.1654 0C11.407 0 9.16536 2.24167 9.16536 5C9.16536 7.75833 11.407 10 14.1654 10C16.9237 10 19.1654 7.75833 19.1654 5C19.1654 2.24167 16.9237 0 14.1654 0ZM14.1654 8.33333C12.3237 8.33333 10.832 6.84167 10.832 5C10.832 3.15833 12.3237 1.66667 14.1654 1.66667C16.007 1.66667 17.4987 3.15833 17.4987 5C17.4987 6.84167 16.007 8.33333 14.1654 8.33333Z"
        fill={color}
      />
    </svg>
  )
}
