import { useThemeContext } from '@/hooks/themeProvider'
import { CloseIcon } from '../../icons'
import LogoViewer from '../LogoViewer'
import Typography from '../Typography'

import * as S from './styles'

type TagComponent = {
  icon: React.ReactNode | string
  text: string
  onClose?: () => void
}

export default function TagComponent({ icon, text, onClose }: TagComponent) {
  const { theme } = useThemeContext()
  return (
    <S.TagComponentWrapper>
      <LogoViewer size={20} logo={icon} />
      <Typography color={theme.colors.gray200} type="BODY_MEDIUM_XS">
        {text}
      </Typography>
      <S.CloseIconWrapper onClick={onClose}>
        <CloseIcon color={theme.colors.gray200} height={16} width={16} />
      </S.CloseIconWrapper>
    </S.TagComponentWrapper>
  )
}
