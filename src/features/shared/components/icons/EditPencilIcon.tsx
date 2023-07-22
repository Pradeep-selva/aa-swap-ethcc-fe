import React from 'react'

import { IconProps } from '.'

export default function EditPencilIcon({
  height = 12,
  width = 12,
  color = '#6D7178',
  cursor
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      cursor={cursor}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.37333 4.01333L7.98667 4.62667L1.94667 10.6667H1.33333V10.0533L7.37333 4.01333V4.01333ZM9.77333 0C9.60667 0 9.43333 0.0666666 9.30667 0.193333L8.08667 1.41333L10.5867 3.91333L11.8067 2.69333C12.0667 2.43333 12.0667 2.01333 11.8067 1.75333L10.2467 0.193333C10.1133 0.06 9.94667 0 9.77333 0V0ZM7.37333 2.12667L0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667V2.12667Z"
        fill={color}
      />
    </svg>
  )
}
