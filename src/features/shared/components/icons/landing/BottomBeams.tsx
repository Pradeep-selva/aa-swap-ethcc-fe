import React from 'react'

import { IconProps } from '..'

export default function Beams({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={376}
      height={164}
      viewBox="0 0 376 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11365_281642)">
        <path
          d="M188 -3.58433e-05L188 820M188 -3.58433e-05L1008 820M188 -3.58433e-05L-632 820M188 -3.58433e-05L-183.5 820M188 -3.58433e-05L580 820"
          stroke="url(#paint0_radial_11365_281642)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_11365_281642"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(188 246.5) rotate(-90) scale(246.5 578.925)"
        >
          <stop />
          <stop offset="0.961899" stopColor="#5AEDFC" />
        </radialGradient>
        <clipPath id="clip0_11365_281642">
          <rect width={376} height={164} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
