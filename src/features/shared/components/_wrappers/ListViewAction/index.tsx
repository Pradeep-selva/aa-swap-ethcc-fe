import React from 'react'

import { FlexContainer, LogoViewer, Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type ListViewActionProps = {
  title: string
  subtitle: React.ReactNode | string
  icon?: React.ReactNode | string
  color?: string
  size?: 'S' | 'M'
  iconsSize?: number
  items?: {
    icon: React.ReactNode
    title: string
    subtitle?: string | number | React.ReactNode
    onClick: () => void
    itemsSubtitleHighlight?: boolean
  }[]
}

export default function ListViewAction({
  title,
  subtitle,
  icon,
  color = 'console2',
  items,
  size = 'S',
  iconsSize = 20
}: ListViewActionProps) {
  const { theme } = useThemeContext()

  return (
    <S.ListViewWrapper>
      <S.ListViewTitleWrapper>
        {!!icon && icon}
        <Typography type="BODY_MEDIUM_S" shouldInheritColor>
          {title}
        </Typography>
      </S.ListViewTitleWrapper>
      <S.ListViewSubtitleWrapper>
        {typeof subtitle === 'string' ? (
          <Typography type="BODY_XS" color={theme.colors.gray600}>
            {subtitle}
          </Typography>
        ) : (
          subtitle
        )}
      </S.ListViewSubtitleWrapper>
      {items?.length === 0 ? (
        <FlexContainer padding="2rem">
          <Typography type="TITLE_XS" color={theme.colors.gray400}>
            No {title} found.
          </Typography>
        </FlexContainer>
      ) : (
        items?.map((item, index) => (
          <S.ListViewItemWrapper
            size={size}
            key={item.title}
            isLastItem={index === items.length - 1}
            onClick={item.onClick}
            color={color}
          >
            <S.ColorStrip size={size} />
            <FlexContainer alignItems="center" gap={0.8}>
              {!!item.icon && <LogoViewer logo={item.icon} size={iconsSize} />}
              <Typography type="TITLE_XS">{item.title}</Typography>
            </FlexContainer>
            {typeof item.subtitle === 'string' ? (
              <S.ItemsSubtitleHighlight
                itemsSubtitleHighlight={!!item.itemsSubtitleHighlight}
              >
                <Typography type="TITLE_XS" color={theme.colors.gray200}>
                  {item.subtitle}
                </Typography>
              </S.ItemsSubtitleHighlight>
            ) : (
              item.subtitle
            )}
          </S.ListViewItemWrapper>
        ))
      )}
    </S.ListViewWrapper>
  )
}
