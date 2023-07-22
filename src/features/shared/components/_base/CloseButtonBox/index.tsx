import { useThemeContext } from '@/hooks/themeProvider'
import { Close } from '../../icons'

import * as S from './styles'

type CloseButtonBoxProps = {
  closeButtonClick: () => void
  icon?: React.ReactNode
}

export default function CloseButtonBox({
  closeButtonClick,
  icon
}: CloseButtonBoxProps) {
  const { theme } = useThemeContext()
  return (
    <S.StyledCloseButtonBox onClick={closeButtonClick}>
      {icon || <Close height={12} width={12} color={theme.colors.gray400} />}
    </S.StyledCloseButtonBox>
  )
}
