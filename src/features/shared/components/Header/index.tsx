import React from 'react'

import {
  CustomConnectButton,
  FlexContainer,
  Typography
} from '@/features/shared'
import useWindowSize from '@/hooks/useWindowSize'

import * as S from './styles'

export default function HeaderUI() {
  const { isSmall } = useWindowSize()

  return (
    <S.HeaderWrapper>
      <Typography type={isSmall ? 'TITLE_L' : 'TITLE_XL'}>1Wallet</Typography>

      <FlexContainer
        justifyContent="flex-end"
        alignItems="center"
        gap={0.8}
        mobileGap={2}
      >
        <CustomConnectButton />
      </FlexContainer>
    </S.HeaderWrapper>
  )
}
