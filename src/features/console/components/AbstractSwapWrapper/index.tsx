import Router from 'next/router'
import React, { useEffect } from 'react'
import { FlexContainer, Header, localStorageService } from '@/features/shared'

import * as S from './styles'

type AbstractSwapWrapperProps = {
  children: React.ReactNode
}

export default function AbstractSwapWrapper({
  children
}: AbstractSwapWrapperProps) {
  useEffect(() => {
    const user = localStorageService.getAuthUserData()
    if (user === null) {
      Router.push('/onboarding')
    }
  }, [])

  return (
    <S.LayoutWrapper>
      <Header />
      <S.LayoutBody>
        <FlexContainer flex={false}></FlexContainer>
        <S.MiddleContentFlexWrapper>
          <S.MainComponentWrapper txnBuilderOpen={false}>
            <S.MainComponentContainer>{children}</S.MainComponentContainer>
          </S.MainComponentWrapper>
        </S.MiddleContentFlexWrapper>
      </S.LayoutBody>
    </S.LayoutWrapper>
  )
}
