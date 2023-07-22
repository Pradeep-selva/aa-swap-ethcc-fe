import * as S from './styles'

export type BlackTitleStrip = {
  children: React.ReactNode
  paddingX?: number
  paddingY?: number
}

export default function BlackTitleStrip({
  children,
  paddingX = 2,
  paddingY = 0.4
}: BlackTitleStrip) {
  return (
    <S.MainWrapper paddingY={paddingY} paddingX={paddingX}>
      {children}
    </S.MainWrapper>
  )
}
