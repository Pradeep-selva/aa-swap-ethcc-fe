import { ChevronIcon } from '../../icons'

import * as S from './styles'

type ExpandIconAnimatedProps = {
  expanded: boolean
  onExpandClick?: () => void
}

export default function ExpandIconAnimated({
  expanded,
  onExpandClick
}: ExpandIconAnimatedProps) {
  return (
    <S.StyledExpandIconAnimated
      onClick={onExpandClick && onExpandClick}
      expanded={expanded}
    >
      <ChevronIcon width={18} height={18} />
    </S.StyledExpandIconAnimated>
  )
}
