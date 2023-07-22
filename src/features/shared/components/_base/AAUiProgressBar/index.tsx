import { defaultTheme } from '@/lib/styledComponents'

import * as S from './styles'

export type AAUiProgressBarProps = {
  value: number
  color?: string
  height?: number
  secondaryColor?: string
  borderColor?: string
}

export default function AAUiProgressBar({
  value,
  color,
  height = 10,
  secondaryColor = defaultTheme.colors.gray700,
  borderColor = defaultTheme.colors.gray800
}: AAUiProgressBarProps) {
  return (
    <S.StyledAAUiProgressBar borderColor={borderColor} height={height}>
      {value > 0 && <S.Bar value={value} color={color} height={height} />}
      {value < 100 && (
        <S.SecondaryMissingBar
          secondaryColor={secondaryColor}
          value={value}
          height={height}
        />
      )}
    </S.StyledAAUiProgressBar>
  )
}
