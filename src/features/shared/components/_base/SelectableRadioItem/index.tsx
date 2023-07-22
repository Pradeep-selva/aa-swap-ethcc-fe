import { useThemeContext } from '@/hooks/themeProvider'
import { Close } from '../../icons'
import FlexContainer from '../../_wrappers/FlexContainer'
import Typography from '../Typography'

import * as S from './styles'
import LogoViewer from '../LogoViewer'

export type SelectableRadioItemProps = {
  type: 'primary' | 'secondary'
  selected: boolean
  id: string
  text: string
  icon: React.ReactNode
  handleSelectItem?: () => void
  handleCloseClick?: () => void
}

export default function SelectableRadioItem({
  type,
  selected,
  text,
  id,
  icon,
  handleSelectItem,
  handleCloseClick
}: SelectableRadioItemProps) {
  const { theme } = useThemeContext()

  return (
    <S.StyledSelectableRadioItem
      selected={selected}
      type={type}
      onClick={handleSelectItem && handleSelectItem}
    >
      <S.Input
        readOnly
        id={id}
        name={id}
        value={text}
        checked={selected}
        type="radio"
      />
      <S.RadioBox selected={selected} type={type} />
      <FlexContainer gap={0.8} alignItems="center">
        <LogoViewer logo={icon} />
        <Typography type="TITLE_XS">{text}</Typography>
      </FlexContainer>
      {selected && (
        <Close
          onClick={handleCloseClick}
          color={
            type === 'secondary' ? theme.colors.warning : theme.colors.gray600
          }
        />
      )}
    </S.StyledSelectableRadioItem>
  )
}
