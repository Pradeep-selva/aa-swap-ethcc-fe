import { useState, InputHTMLAttributes } from 'react'

import { TAsset } from '@/features/console/types'
import { useThemeContext } from '@/hooks/themeProvider'
import { ChevronIcon, Search } from '../../icons'
import { TagComponent, FlexContainer, CloseButtonBox } from '@/features/shared'

import * as S from './styles'

type SearchBarProps = {
  selectedAsset?: TAsset | null
  removeAsset?: () => void
  showCloseButton?: boolean
  closeButtonClick?: () => void
  backButtonClick?: () => void
  searchText?: string
  onInputChange: (value: string) => void
  value: string
} & InputHTMLAttributes<HTMLInputElement>

export default function SearchBar({
  value,
  selectedAsset,
  removeAsset,
  showCloseButton,
  closeButtonClick,
  backButtonClick,
  searchText = 'Search actions',
  onInputChange
}: SearchBarProps) {
  const { theme } = useThemeContext()
  const [focused, setFocused] = useState(false)

  const setToFocused = () => {
    setFocused(true)
  }
  const setToUnfocused = () => {
    setFocused(false)
  }

  return (
    <S.MainWrapper>
      <S.ColorStrip focused={focused} />
      {backButtonClick && (
        <FlexContainer style={{ marginRight: '0.4rem' }}>
          <CloseButtonBox
            closeButtonClick={backButtonClick}
            icon={<ChevronIcon color={theme.colors.gray400} />}
          />
        </FlexContainer>
      )}
      <S.SearchWrapper>
        <Search height={20} width={20} />
        <S.StyledInput
          onFocus={setToFocused}
          onBlur={setToUnfocused}
          placeholder={searchText}
          spellCheck={false}
          onChange={(e) => onInputChange(e.target.value)}
          value={value}
        />
      </S.SearchWrapper>
      {showCloseButton && closeButtonClick && (
        <CloseButtonBox closeButtonClick={closeButtonClick} />
      )}
      <S.SelectedAssetWrapper>
        {selectedAsset && (
          <TagComponent
            text={selectedAsset.name.toUpperCase()}
            icon={selectedAsset.logo}
            onClose={removeAsset}
          />
        )}
      </S.SelectedAssetWrapper>
    </S.MainWrapper>
  )
}
