import React from 'react'

import Typography, { TTypographyType } from '../../_base/Typography'
import FlexContainer from '../FlexContainer'

import * as S from './styles'

export type TPanelSize = 'M'

type PanelProps = {
  title: string | React.ReactNode
  leftIcon?: React.ReactNode
  children: React.ReactNode
  titleSlot?: React.ReactNode
  padding?: string
  titleType?: TTypographyType
  titleColor?: string
}

export default function Panel({
  title,
  children,
  leftIcon,
  titleSlot,
  padding = '2.4rem 1.6rem',
  titleType = 'TITLE_XS',
  titleColor
}: PanelProps) {
  return (
    <S.PanelWrapper>
      <S.Header>
        <FlexContainer gap={0.8} alignItems="center">
          {!!leftIcon && leftIcon}
          <Typography color={titleColor} type={titleType}>
            {title}
          </Typography>
        </FlexContainer>
        {!!titleSlot && titleSlot}
      </S.Header>
      <S.Body padding={padding}>{children}</S.Body>
    </S.PanelWrapper>
  )
}
