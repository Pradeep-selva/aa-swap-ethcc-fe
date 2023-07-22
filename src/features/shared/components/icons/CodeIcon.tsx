import React from 'react'
import { IconProps } from '.'

export default function CodeIcon({
  width = 25,
  height = 20,
  color = '#B2F8FF'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#clip0_15856_304824)"
        filter="url(#filter0_d_15856_304824)"
      >
        <path
          d="M10.3337 13.8333L6.50033 10L10.3337 6.16667L9.16699 5L4.16699 10L9.16699 15L10.3337 13.8333ZM14.667 13.8333L18.5003 10L14.667 6.16667L15.8337 5L20.8337 10L15.8337 15L14.667 13.8333V13.8333Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15856_304824"
          x="-1.5"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15856_304824"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15856_304824"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_15856_304824">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
