import React from 'react'
import { IconProps } from '..'

export default function TenderlyRPIcon({ width = 60, height = 60 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={60} height={60} fill="#090f21" />
      <rect
        x={16}
        y={13}
        width={28}
        height={34}
        fill="#5AEDFC"
        fillOpacity="0.04"
      />
      <ellipse
        cx={30}
        cy="14.5"
        rx={14}
        ry="3.5"
        fill="#5AEDFC"
        fillOpacity="0.12"
        stroke="#5AEDFC"
      />
      <ellipse
        cx={30}
        cy="47.5"
        rx={14}
        ry="3.5"
        fill="#5AEDFC"
        fillOpacity="0.12"
        stroke="#5AEDFC"
      />
      <g opacity="0.4">
        <path
          d="M25.8413 24.2406L34.6986 23.3558L38.968 30.151L34.3802 37.8308L25.3778 38.6898L21.1084 31.8947L25.8413 24.2406Z"
          fill="#5AEDFC"
          fillOpacity="0.05"
        />
        <path
          d="M30.1107 31.0357L34.6986 23.3558M30.1107 31.0357L21.1084 31.8947M30.1107 31.0357L34.3802 37.8308M34.6986 23.3558L25.8413 24.2406L21.1084 31.8947M34.6986 23.3558L38.968 30.151L34.3802 37.8308M21.1084 31.8947L25.3778 38.6898L34.3802 37.8308"
          stroke="#5AEDFC"
        />
      </g>
    </svg>
  )
}
