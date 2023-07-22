import { ButtonHTMLAttributes } from 'react'
import LogoViewer from '../LogoViewer'

import * as S from './styles'

export type AssetButtonTypeProps = 'action' | 'asset'

type AssetButtonProps = {
  text: string
  buttonType?: AssetButtonTypeProps
  icon?: React.ReactNode | string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function AssetButton({
  buttonType = 'action',
  text,
  icon,
  ...props
}: AssetButtonProps) {
  return (
    <S.StyledButton buttonType={buttonType} {...props}>
      <LogoViewer logo={icon} size={20} />
      {text}
    </S.StyledButton>
  )
}
