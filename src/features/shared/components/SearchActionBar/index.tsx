import { useState } from 'react'

import { TAsset } from '@/features/console/types'
import { useThemeContext } from '@/hooks/themeProvider'
import ListItem from '../_base/ListItem'
import SearchBar from '../_base/SearchBar'
import Typography from '../_base/Typography'
import BlackTitleStrip from '../_base/BlackTitleStrip'
import { ItemCategoryType, SearchItem } from '../../types'

import * as S from './styles'

// SearchItem is used to map any type to a SearchItem that can be used here, data is the prop that hold all values from T Type allowing retrieval
// ex: input: UserAsset => return { id, title, data: UserAsset }
type SearchActionBarProps<T> = {
  handleSelect: (item: SearchItem<T>) => void
  selectedAsset: TAsset | null
  items: ItemCategoryType<T>[]
  removeAsset?: () => void
  closeButtonClick?: () => void
  showCloseButton?: boolean
  backButtonClick?: () => void
  searchText?: string
  emptyResultText?: string
  hideSecondary?: boolean
}

export default function SearchActionBar<T>({
  items,
  selectedAsset,
  handleSelect,
  removeAsset,
  showCloseButton,
  closeButtonClick,
  backButtonClick,
  searchText,
  emptyResultText = 'No result found',
  hideSecondary = false
}: SearchActionBarProps<T>) {
  const { theme } = useThemeContext()
  const [filter, setFilter] = useState<string>('')
  // return empty categories when no action found
  const filteredActionsData = items.map((category) => {
    const filteredActions = category.items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )

    return {
      ...category,
      actions: filteredActions
    }
  })

  const handleInputChange = (value: string) => {
    setFilter(value)
  }

  return (
    <S.MainWrapper>
      <SearchBar
        value={filter}
        onInputChange={handleInputChange}
        selectedAsset={selectedAsset}
        removeAsset={removeAsset && removeAsset}
        showCloseButton={showCloseButton}
        closeButtonClick={closeButtonClick}
        backButtonClick={backButtonClick}
        searchText={searchText}
      />
      {filteredActionsData.length > 0 ? (
        filteredActionsData.map((item, idx) => (
          <S.ActionsWrapper key={idx}>
            <BlackTitleStrip>
              <Typography type="BODY_XS" color={theme.colors.gray500}>
                {item.categoryTitle}
              </Typography>
            </BlackTitleStrip>
            {item.actions.length > 0 ? (
              item.actions.map((actionItem) => (
                <ListItem
                  key={actionItem.id}
                  id={actionItem.id}
                  actionIcon={actionItem.icon as string}
                  strategyIcon={actionItem?.secondaryIcon}
                  title={actionItem.name}
                  secondaryInfo={hideSecondary ? '' : actionItem?.secondaryInfo}
                  onClickItem={() => handleSelect(actionItem)}
                />
              ))
            ) : (
              <S.NotFoundWrapper>
                <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
                  {emptyResultText}
                </Typography>
              </S.NotFoundWrapper>
            )}
          </S.ActionsWrapper>
        ))
      ) : (
        <S.NotFoundWrapper>
          <Typography type="BODY_MEDIUM_S">No result found</Typography>
        </S.NotFoundWrapper>
      )}
    </S.MainWrapper>
  )
}
