import React from 'react'
import { IconProps } from '..'

export default function SendErcRPIcon({ width = 60, height = 60 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={60} height={60} fill="#090f21" />
      <ellipse
        opacity="0.4"
        cx={30}
        cy="43.5"
        rx="3.5"
        ry={14}
        transform="rotate(-90 30 43.5)"
        fill="#16292D"
        stroke="#5AEDFC"
      />
      <ellipse
        cx={30}
        cy="39.5"
        rx="3.5"
        ry={14}
        transform="rotate(-90 30 39.5)"
        fill="#16292D"
        stroke="#5AEDFC"
      />
      <ellipse
        cx={30}
        cy="16.5"
        rx="3.5"
        ry={14}
        transform="rotate(-90 30 16.5)"
        fill="#16292D"
        stroke="#5AEDFC"
      />
      <path
        d="M27.4952 29.8963L29.5794 26.6542C29.7762 26.3481 30.2238 26.3481 30.4206 26.6542L32.5048 29.8963C32.7187 30.229 32.4798 30.6667 32.0842 30.6667L30 30.6667L27.9158 30.6667C27.5202 30.6667 27.2813 30.229 27.4952 29.8963Z"
        fill="#16292D"
      />
      <path
        d="M30 40L30 30.6667M30 30.6667L27.9158 30.6667C27.5202 30.6667 27.2813 30.229 27.4952 29.8963L29.5794 26.6542C29.7762 26.3481 30.2238 26.3481 30.4206 26.6542L32.5048 29.8963C32.7187 30.229 32.4798 30.6667 32.0842 30.6667L30 30.6667Z"
        stroke="#5AEDFC"
      />
    </svg>
  )
}
