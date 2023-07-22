import React from 'react'
import styled, { css } from 'styled-components'

import { Address } from '../../types'

type AvatarIconProps = {
  width?: number
  height?: number
  address?: Address | string
}

export const AVATAR_VARIANTS = [
  'conic-gradient(from 180deg at 50% 50%, #FF4646 0deg, #FFF500 360deg)',
  'conic-gradient(from 180deg at 50% 50%, #00876F 0deg, #CEEDFF 360deg)',
  'conic-gradient(from 180deg at 50% 50%, #B2F8FF 0deg, #0012B7 360deg)',
  'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #8F5600 360deg)',
  'conic-gradient(from 180deg at 50% 50%, #FF46AA 0deg, #FFFFFF 360deg)'
]

export const calculateAvatarSafeIndex = (address?: Address | string) => {
  if (!address) return 0
  const lastCharacter = address?.slice(-1) || '0'
  const numericValue =
    typeof lastCharacter === 'string'
      ? lastCharacter.charCodeAt(0)
      : lastCharacter

  const safeIndex = numericValue % AVATAR_VARIANTS.length
  return safeIndex
}

export default function AvatarGradient({
  height = 1.4,
  width = 1.4,
  address
}: AvatarIconProps) {
  return (
    <AvatarDiv
      height={height}
      width={width}
      background={AVATAR_VARIANTS[calculateAvatarSafeIndex(address)]}
    />
  )
}

export const AvatarDiv = styled.div<AvatarIconProps & { background: string }>`
  ${({ width, height, background }) => css`
    width: ${width}rem;
    height: ${height}rem;
    background: ${background};
    border-radius: 0.4rem;
  `}
`
