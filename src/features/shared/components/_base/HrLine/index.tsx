import * as S from './styles'

type HrLineProps = {
  color: string
  paddingX?: number
}

export default function HrLine({ color, paddingX = 0 }: HrLineProps) {
  return (
    <S.StyledHrLine paddingX={paddingX}>
      <S.HeaderLine color={color} />
    </S.StyledHrLine>
  )
}
