import React from 'react'

import { IconProps } from '..'

export default function TabBeam({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={82}
      height={18}
      viewBox="0 0 82 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="0.0475836"
        height={64}
        transform="matrix(0 -1 -1 0 73 9.5)"
        stroke="url(#paint0_radial_11260_252559)"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_f_11260_252559)">
        <rect
          width="0.5"
          height={64}
          transform="matrix(0 -1 -1 0 73 9)"
          stroke="url(#paint1_radial_11260_252559)"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_11260_252559"
          x="0.5"
          y={0}
          width={81}
          height="17.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4}
            result="effect1_foregroundBlur_11260_252559"
          />
        </filter>
        <radialGradient
          id="paint0_radial_11260_252559"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.023793 32) rotate(180) scale(15.5238 45.3065)"
        >
          <stop stopColor="#5AEDFC" />
          <stop offset="0.561006" stopColor="#111218" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_11260_252559"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.25 32) rotate(180) scale(23.25 21.1705)"
        >
          <stop stopColor="#5AEDFC" />
          <stop offset={1} stopColor="#111218" />
        </radialGradient>
      </defs>
    </svg>
  )
}
