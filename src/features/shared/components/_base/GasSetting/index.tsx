import GasIcon from '../../icons/GasIcon'
import Typography from '../Typography'

import * as S from './styles'

type TabComponentProps = {
  text: string
  icon?: React.ReactNode
}

export default function GasSetting({
  text,
  icon = <GasIcon height={10} width={14} />
}: TabComponentProps) {
  return (
    <S.MainWrapper>
      {icon}
      <Typography type="TITLE_XS">{text}</Typography>
    </S.MainWrapper>
  )
}
