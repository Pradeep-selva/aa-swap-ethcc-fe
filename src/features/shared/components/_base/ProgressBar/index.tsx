import React from 'react'

import { useThemeContext } from '@/hooks/themeProvider'
import { ProgressBarBeam } from '../../icons/index'
import Typography from '../Typography'

import * as S from './styles'

type ProgressBarProps = {
  percentage: number
  showPercentage?: boolean
  color?: string
}

export default function ProgressBar({
  percentage,
  showPercentage = false,
  color
}: ProgressBarProps) {
  const { theme } = useThemeContext()
  return (
    <S.MainWrapper>
      <S.ProgressBarContainer>
        <ProgressBarBeam percentage={percentage} color={color} />
      </S.ProgressBarContainer>
      {showPercentage && (
        <S.PercentageTitle>
          <Typography color={theme.colors.console2} type="TITLE_S">
            {percentage}%
          </Typography>
        </S.PercentageTitle>
      )}
    </S.MainWrapper>
  )
}
