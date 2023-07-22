import { useThemeContext } from '@/hooks/themeProvider'
import Account from '../../icons/ProfileAccountIcon'
import Typography from '../Typography'

import * as S from './styles'

type ProfileProps = {
  name: string
  avatar?: React.ReactNode | string
  consoleAddress?: string
  onClick?: () => void
}

export default function Profile({
  name,
  avatar = <Account height={18} width={18} />,
  onClick
}: ProfileProps) {
  const { theme } = useThemeContext()

  return (
    <S.MainWrapper onClick={onClick}>
      {name && (
        <Typography color={theme.colors.gray300} type="TITLE_XS">
          <b>Your Safe: </b>
          {name.length > 20
            ? `${name.substring(0, 6)}...${name.substring(name.length - 4)}`
            : name}
        </Typography>
      )}
      {avatar}
    </S.MainWrapper>
  )
}
