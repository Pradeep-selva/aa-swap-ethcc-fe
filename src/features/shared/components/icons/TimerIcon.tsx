import React from 'react'
import { IconProps } from '.'

export default function TimerIcon({
  width = 12,
  height = 12,
  color = 'inherit'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46484 0.503906L7.46484 0.503906L7.46484 1.50391L4.46484 1.50391L4.46484 0.503906ZM6.46484 7.0039L5.46484 7.0039L5.46484 4.00391L6.46484 4.00391L6.46484 7.0039ZM2.44984 3.69391L1.73984 2.98391C1.95484 2.72891 2.18984 2.48891 2.44484 2.27891L3.15484 2.98891C3.92984 2.36891 4.90484 1.99891 5.96484 1.99891C8.44984 1.99891 10.4648 4.01391 10.4648 6.49891C10.4648 8.9839 8.45484 10.9989 5.96484 10.9989C3.47484 10.9989 1.46484 8.9839 1.46484 6.4989C1.46484 5.44391 1.83484 4.46891 2.44984 3.69391ZM5.96484 10.0039C7.89984 10.0039 9.46484 8.43891 9.46484 6.50391C9.46484 4.56891 7.89984 3.00391 5.96484 3.00391C4.02984 3.00391 2.46484 4.56891 2.46484 6.5039C2.46484 8.4389 4.02984 10.0039 5.96484 10.0039Z"
        fill={color}
      />
    </svg>
  )
}