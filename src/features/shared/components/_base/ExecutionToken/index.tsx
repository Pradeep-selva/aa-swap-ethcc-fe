import * as S from './styles'

type ExecutionTokenProps = {
  tokenIcon: React.ReactNode
  onClick: () => void
}

export default function ExecutionToken({
  tokenIcon,
  onClick
}: ExecutionTokenProps) {
  return (
    <S.StyledExecutionToken onClick={onClick}>
      <S.TokenImageWrapper>{tokenIcon}</S.TokenImageWrapper>
    </S.StyledExecutionToken>
  )
}
