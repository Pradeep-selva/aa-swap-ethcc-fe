import React from 'react'

import { IconProps } from '..'

export default function Beams({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={756}
      height={160}
      viewBox="0 0 756 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M378 -160L378 160M378 -160L756 160M378 -160L0 160M378 -160L206.748 160M378 -160L558.702 160"
        stroke="url(#paint0_linear_11332_258452)"
        strokeWidth={2}
        strokeMiterlimit={1}
        strokeLinecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11332_258452"
          x1="376.071"
          y1="157.951"
          x2="376.071"
          y2="-157.658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5AEDFC" />
          <stop offset="0.327632" stopColor="#5AEDFC" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
