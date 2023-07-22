import { useThemeContext } from '@/hooks/themeProvider'
import FlexContainer from '../FlexContainer'
import { WalletIcon } from '../../icons'
import Typography from '../../_base/Typography'

import * as S from './styles'

type TableListWrapperProps = {
  leftTitle: string
  children: React.ReactNode
  rightTitle?: string
  icon?: React.ReactNode
}

export default function TableListWrapper({
  leftTitle,
  rightTitle,
  icon = <WalletIcon />,
  children
}: TableListWrapperProps) {
  const { theme } = useThemeContext()
  return (
    <S.StyledTableListWrapper>
      <S.ListView>
        <S.ColorStrip />
        <FlexContainer alignItems="center" gap={0.9}>
          {icon}
          <Typography color={theme.colors.gray500} type="BODY_MEDIUM_S">
            {leftTitle}
          </Typography>
        </FlexContainer>
        <Typography color={theme.colors.gray200} type="BODY_MEDIUM_S">
          {rightTitle}
        </Typography>
      </S.ListView>
      {children}
    </S.StyledTableListWrapper>
  )
}
