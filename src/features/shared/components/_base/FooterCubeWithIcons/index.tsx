import { FooterCube } from '../../icons'

import * as S from './style'

type FooterCubeWithIconsProps = {
  accentColor: string
  gap?: number
  showCube?: boolean
}

export default function FooterCubeWithIcons({
  accentColor,
  gap = 5.8,
  showCube = false
}: FooterCubeWithIconsProps) {
  return (
    <S.StyledFooterCubeWithIcons gap={gap}>
      {showCube && <FooterCube color={accentColor} />}
    </S.StyledFooterCubeWithIcons>
  )
}
