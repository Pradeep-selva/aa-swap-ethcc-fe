import React from 'react'

import { IconProps } from '.'

export default function FooterCube({
  height = 66,
  width = 60,
  color
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.1963 33L58.9981 16.8025M30.1963 33L1 16.8025M30.1963 33V65M58.9981 16.8025L31.7063 1.82846C30.765 1.31201 29.6259 1.30875 28.6817 1.81982L1 16.8025M58.9981 16.8025V46.9539C58.9981 48.0958 58.3822 49.1489 57.3868 49.7086L30.1963 65M1 16.8025V46.9416C1 48.09 1.623 49.1481 2.62726 49.7052L30.1963 65"
        stroke={color}
      />
      <mask
        id="mask0_9824_222235"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={60}
        height={66}
      >
        <path
          d="M30.1963 33L58.9981 16.8025M30.1963 33L1 16.8025M30.1963 33V65M58.9981 16.8025L31.7063 1.82846C30.765 1.31201 29.6259 1.30875 28.6817 1.81982L1 16.8025M58.9981 16.8025V46.9539C58.9981 48.0958 58.3822 49.1489 57.3868 49.7086L30.1963 65M1 16.8025V46.9416C1 48.09 1.623 49.1481 2.62726 49.7052L30.1963 65"
          stroke="#93A7E3"
        />
      </mask>
      <g mask="url(#mask0_9824_222235)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7979 16.4843L24.3363 21.9783L23.0949 21.194V68.951H8.89131V19.9634H21.1468L-7.48047 1.87907L-0.277073 -9.55371L31.5397 10.5455L30.9013 11.5588L60.7474 -8.64538L67.6187 1.5317L40.3909 19.9634H51.4973V68.951H37.2937V22.0601L33.3603 24.7228L27.7979 16.4843Z"
          fill="#292930"
        />
      </g>
    </svg>
  )
}