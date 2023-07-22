import Typography from '../Typography'

import * as S from './styles'

type SideNavItemProps = {
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
  text?: string | null
}

export default function SideNavItem({
  text,
  icon,
  isSelected,
  onClick
}: SideNavItemProps) {
  return (
    <S.MainWrapper onClick={onClick} selected={isSelected}>
      {icon}
      {text && <Typography type="TITLE_XS">{text}</Typography>}
    </S.MainWrapper>
  )
}
