import React from 'react'
import { IconProps } from '.'

export default function ErrorOutline({
  width = 16,
  height = 16,
  color = 'inherit'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33203 10.0007H8.66536V11.334H7.33203V10.0007ZM7.33203 4.66732H8.66536V8.66732H7.33203V4.66732ZM7.99203 1.33398C4.31203 1.33398 1.33203 4.32065 1.33203 8.00065C1.33203 11.6807 4.31203 14.6673 7.99203 14.6673C11.6787 14.6673 14.6654 11.6807 14.6654 8.00065C14.6654 4.32065 11.6787 1.33398 7.99203 1.33398ZM7.9987 13.334C5.05203 13.334 2.66536 10.9473 2.66536 8.00065C2.66536 5.05398 5.05203 2.66732 7.9987 2.66732C10.9454 2.66732 13.332 5.05398 13.332 8.00065C13.332 10.9473 10.9454 13.334 7.9987 13.334Z"
        fill={color}
      />
    </svg>
  )
}
