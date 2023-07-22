import React from 'react'

import { IconProps } from '.'

export default function TransactionBuilderIcon({
  height = 16,
  width = 16,
  color = '#B2F8FF',
  onClick
}: IconProps) {
  return (
    <svg
      onClick={onClick && onClick}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10174_272147)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.9974 1.66699C5.3974 1.66699 1.66406 5.40033 1.66406 10.0003C1.66406 14.6003 5.3974 18.3337 9.9974 18.3337C14.5974 18.3337 18.3307 14.6003 18.3307 10.0003C18.3307 5.40033 14.5974 1.66699 9.9974 1.66699ZM9.9974 16.667C6.3224 16.667 3.33073 13.6753 3.33073 10.0003C3.33073 6.32533 6.3224 3.33366 9.9974 3.33366C13.6724 3.33366 16.6641 6.32533 16.6641 10.0003C16.6641 13.6753 13.6724 16.667 9.9974 16.667Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2368 9.48336C11.5951 8.4667 11.3785 7.28336 10.5618 6.4667C9.63681 5.5417 8.23681 5.38336 7.14515 5.97503L9.10348 7.93336L7.92848 9.10836L5.97015 7.15003C5.37848 8.25003 5.53681 9.6417 6.46181 10.5667C7.27848 11.3834 8.46181 11.6 9.47848 11.2417L12.3201 14.0834C12.4868 14.25 12.7451 14.25 12.9118 14.0834L14.0785 12.9167C14.2451 12.75 14.2451 12.4917 14.0785 12.325L11.2368 9.48336Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_10174_272147">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
