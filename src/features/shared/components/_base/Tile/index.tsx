import Image from 'next/image'

import Typography from '../Typography'

import * as S from './styles'

type TileProps = {
  id: string
  name: string
  icon: string
  isSelected: boolean
  onClick: () => void
}

export default function Tile({
  id,
  name,
  icon,
  isSelected,
  onClick
}: TileProps) {
  const handleClick = () => {
    onClick()
  }

  return (
    <S.GridBox onClick={handleClick} isSelected={isSelected}>
      <S.ImageWrapper>
        <Image fill loader={() => icon} src={name} alt={name} />
      </S.ImageWrapper>
      <Typography type="BODY_MEDIUM_XS">{name?.toLowerCase()}</Typography>
    </S.GridBox>
  )
}
