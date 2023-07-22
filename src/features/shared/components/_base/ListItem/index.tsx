import React from 'react'
import LogoViewer from '../LogoViewer'

import * as S from './styles'

type ListItemProps = {
  id: string
  title: string
  onClickItem: (item: any) => void
  actionIcon?: React.ReactNode | string
  strategyIcon?: React.ReactNode | string
  secondaryInfo?: React.ReactNode | string
  color?: 'primary'
}

export default function ListItem({
  id,
  title,
  actionIcon,
  strategyIcon,
  secondaryInfo,
  onClickItem
}: ListItemProps) {
  return (
    <S.ListItemWrapper
      onClick={() =>
        onClickItem({ id, title, actionIcon, strategyIcon, secondaryInfo })
      }
    >
      <S.ColorStrip />
      <S.ListItemLeftSide>
        <LogoViewer logo={actionIcon} />
        {strategyIcon && <LogoViewer logo={strategyIcon} />}
        <S.StyledTypography type="BODY_MEDIUM_S">{title}</S.StyledTypography>
      </S.ListItemLeftSide>

      <S.ListItemRightSide>
        {!!secondaryInfo && (
          <S.StyledTypography type="BODY_MEDIUM_XS">
            {secondaryInfo}
          </S.StyledTypography>
        )}
      </S.ListItemRightSide>
    </S.ListItemWrapper>
  )
}
