import { Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'
import { Children } from 'react'

import * as S from './styles'

type InformationBarProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  borderRadius?: number
}

export default function InformationBar({
  children,
  icon,
  borderRadius = 0.4
}: InformationBarProps) {
  const { theme } = useThemeContext()
  return (
    <S.StyledInformationBar borderRadius={borderRadius}>
      {icon}
      <Typography color={theme.colors.gray400} type="BODY_XS">
        {children}
      </Typography>
    </S.StyledInformationBar>
  )
}
