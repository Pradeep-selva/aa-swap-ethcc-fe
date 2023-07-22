import React from 'react'

import { IconProps } from '.'

export default function EthFilledIcon({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2109 1.66699V7.82809L15.4183 10.155L10.2109 1.66699Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M10.2081 1.66699L5 10.155L10.2081 7.82809V1.66699Z"
        fill="white"
      />
      <path
        d="M10.2109 14.1469V18.3333L15.4218 11.124L10.2109 14.1469Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M10.2081 18.3333V14.1462L5 11.124L10.2081 18.3333Z"
        fill="white"
      />
      <path
        d="M10.2109 13.1782L15.4183 10.1546L10.2109 7.8291V13.1782Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M5 10.1546L10.2081 13.1782V7.8291L5 10.1546Z"
        fill="white"
        fillOpacity="0.602"
      />
    </svg>
  )
}
