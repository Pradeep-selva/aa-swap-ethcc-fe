import React from 'react'

import { IconProps } from '.'

export default function SafeLogoWithoutName({
  height = 26,
  width = 26,
  color = 'inherit',
  onClick
}: IconProps) {
  return (
    <svg
      onClick={onClick && onClick}
      width={height}
      height={width}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2403 12.9922H21.4774C20.6522 12.9922 19.9836 13.6417 19.9836 14.4433V18.3384C19.9836 19.14 19.3149 19.7895 18.4897 19.7895H7.49776C6.67256 19.7895 6.00391 20.439 6.00391 21.2404V23.9242C6.00391 24.7257 6.67256 25.3752 7.49776 25.3752H19.1259C19.9511 25.3752 20.6103 24.7257 20.6103 23.9242V21.7711C20.6103 20.9695 21.279 20.4009 22.1042 20.4009H24.2397C25.0649 20.4009 25.7336 19.7514 25.7336 18.9499V14.4264C25.7336 13.6248 25.0649 12.9922 24.2397 12.9922H24.2403Z"
        fill={color}
      />
      <path
        d="M6.0123 7.65983C6.0123 6.85824 6.68095 6.20877 7.50615 6.20877H18.4914C19.3165 6.20877 19.9852 5.55929 19.9852 4.75776V2.07406C19.9852 1.27252 19.3165 0.623047 18.4914 0.623047H6.8694C6.04421 0.623047 5.37555 1.27252 5.37555 2.07406V4.14196C5.37555 4.94348 4.7069 5.59296 3.88171 5.59296H1.75556C0.930371 5.59296 0.261719 6.24243 0.261719 7.04401V11.5724C0.261719 12.3739 0.933162 12.9908 1.75836 12.9908H4.52129C5.34648 12.9908 6.01508 12.3413 6.01508 11.5398L6.0123 7.66027V7.65983Z"
        fill={color}
      />
      <path
        d="M11.7032 10.168H14.3571C15.222 10.168 15.9237 10.8501 15.9237 11.6897V14.2674C15.9237 15.1075 15.2214 15.7891 14.3571 15.7891H11.7032C10.8384 15.7891 10.1367 15.1069 10.1367 14.2674V11.6897C10.1367 10.8496 10.8389 10.168 11.7032 10.168Z"
        fill={color}
      />
    </svg>
  )
}
