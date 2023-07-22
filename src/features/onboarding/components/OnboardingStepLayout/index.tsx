import React from 'react'

import { Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type OnboardStepLayoutProps = {
  title: string
  children: React.ReactNode
  subtitle?: string
  padding?: string
}

export default function OnboardStepLayout({
  title,
  children,
  subtitle,
  padding
}: OnboardStepLayoutProps) {
  const { theme } = useThemeContext()

  return (
    <S.OnboardStepLayoutWrapper padding={padding}>
      <S.OnboardStepTitle>{title}</S.OnboardStepTitle>
      <Typography type="BODY_S" color={theme.colors.gray500}>
        {subtitle}
      </Typography>
      {children}
    </S.OnboardStepLayoutWrapper>
  )
}
