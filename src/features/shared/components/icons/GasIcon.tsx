import React from 'react'

import { IconProps } from '.'

export default function GasIcon({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.15622 7.52008L4.77725 0.708432C4.87505 0.524459 5.15385 0.593958 5.15385 0.80231V5.98605C5.15385 6.0965 5.24339 6.18605 5.35385 6.18605H8.66718C8.81804 6.18605 8.91459 6.34671 8.84378 6.47992L5.22275 13.2916C5.12495 13.4755 4.84615 13.406 4.84615 13.1977V8.01395C4.84615 7.9035 4.75661 7.81395 4.64615 7.81395H1.33282C1.18196 7.81395 1.08541 7.65329 1.15622 7.52008Z"
        fill="url(#paint0_linear_10163_266061)"
        stroke="#B2F8FF"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10163_266061"
          x1="5"
          y1="0"
          x2="5"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#061636" stopOpacity="0.44" />
          <stop offset="1" stopColor="#B2F8FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
