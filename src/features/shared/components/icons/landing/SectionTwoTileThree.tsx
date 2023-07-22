import React from 'react'

import { IconProps } from '..'

export default function SectionTwoTileThree({
  height = 16,
  width = 16
}: IconProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="10" fill="#5AEDFC" fillOpacity="0.12" />
      <circle cx="30" cy="30" r="15" fill="#5AEDFC" fillOpacity="0.08" />
      <path
        d="M30 24L30 29.9196C30 30.2912 30.1476 30.6476 30.4104 30.9104L34 34.5"
        stroke="#5AEDFC"
      />
      <path
        d="M40 30C40 35.5228 35.5228 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20"
        stroke="#5AEDFC"
      />
      <path
        d="M48 30C48 39.9411 39.9411 48 30 48C20.0589 48 12 39.9411 12 30C12 20.0589 20.0589 12 30 12"
        stroke="#5AEDFC"
      />
    </svg>
  )
}
