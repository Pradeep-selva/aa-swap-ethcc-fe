import React from 'react'

import { Typography } from '@/features/shared'
import { defaultTheme } from '@/lib/styledComponents'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type ListViewProps = {
  title: string
  icon?: React.ReactNode
  color?: string
  items?: {
    title: string
    body: React.ReactNode
  }[]
  colorStrip?: boolean
  itemsPadding?: string
  titleColor?: string
}

export default function ListView({
  title,
  icon,
  items,
  color = 'console2',
  colorStrip = true,
  itemsPadding = '1.6rem 2rem',
  titleColor = defaultTheme.colors.gray200
}: ListViewProps) {
  const { theme } = useThemeContext()

  return (
    <S.ListViewWrapper>
      <S.ListViewTitle color={color}>
        {colorStrip && <S.ColorStrip />}
        {icon}
        <Typography type="BODY_MEDIUM_S" color={titleColor}>
          {title}
        </Typography>
      </S.ListViewTitle>
      <S.ListViewItemsWrapper>
        {items?.map((item) => (
          <S.ListViewItemWrapper key={item.title}>
            <S.ListViewItemTitle>
              <Typography type="BODY_XS" color={theme.colors.gray500}>
                {item.title}
              </Typography>
            </S.ListViewItemTitle>
            <S.ListViewItemBody itemsPadding={itemsPadding}>
              {item.body}
            </S.ListViewItemBody>
          </S.ListViewItemWrapper>
        ))}
      </S.ListViewItemsWrapper>
    </S.ListViewWrapper>
  )
}
