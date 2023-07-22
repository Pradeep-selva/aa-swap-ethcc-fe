import React from 'react'
import { generateUUID } from '../../utils/actions'

import { IconProps } from '.'

export default function EthCoin({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.7533 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.7533 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z"
        fill="#292930"
        stroke="black"
      />
      <path
        d="M10.0039 4.09106V8.39095L13.6383 10.0149L10.0039 4.09106Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M10.0021 4.09106L6.36719 10.0149L10.0021 8.39095V4.09106Z"
        fill="white"
      />
      <path
        d="M10.0039 12.8011V15.7228L13.6408 10.6914L10.0039 12.8011Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M10.0021 15.7228V12.8006L6.36719 10.6914L10.0021 15.7228Z"
        fill="white"
      />
      <path
        d="M10.0039 12.125L13.6383 10.0148L10.0039 8.39185V12.125Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M6.36719 10.0148L10.0021 12.125V8.39185L6.36719 10.0148Z"
        fill="white"
        fillOpacity="0.602"
      />
    </svg>
  )
}
