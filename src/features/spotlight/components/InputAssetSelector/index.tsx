import React, { useEffect, useState } from 'react'

import { TAsset } from '@/features/console'
import { mapAssetToSItem } from '../../mappers/mappers'
import { useThemeContext } from '@/hooks/themeProvider'
import {
  AssetButton,
  FlexContainer,
  LogoViewer,
  Modal,
  SearchActionBar,
  SearchItem,
  Typography
} from '@/features/shared'
import styled, { css } from 'styled-components'

type InputAssetSelectorProps = {
  selectedAsset: TAsset | null
  availableAssets?: TAsset[]
  setSelectedAsset?: (asset: TAsset) => void
  searchText?: string
  disabled?: boolean
  hideSecondary?: boolean
}

export default function InputAssetSelector({
  selectedAsset,
  setSelectedAsset,
  searchText = 'Search wallet assets',
  availableAssets = [],
  disabled = false,
  hideSecondary = false
}: InputAssetSelectorProps) {
  const { theme } = useThemeContext()
  const [selectModalIsOpen, setSelectModalIsOpen] = useState(false)

  const assetsMappedList = [
    {
      categoryTitle: 'Assets',
      items: availableAssets.map((asset) => mapAssetToSItem(asset))
    }
  ]

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectModalIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [setSelectModalIsOpen])

  // if (!selectedAsset) return <AssetButton text="Select asset" />

  return (
    <FlexContainer justifyContent="flex-end">
      {selectedAsset ? (
        <FlexContainer
          justifyContent="flex-end"
          alignItems="center"
          gap={0.8}
          flex={false}
          padding="0.4rem 0.8rem"
          style={{
            border: `1px solid ${theme.colors.gray600}`,
            borderRadius: '0.4rem',
            cursor: disabled ? 'not-allowed' : 'pointer'
          }}
          onClick={() => {
            if (selectModalIsOpen || disabled) return
            setSelectModalIsOpen(true)
          }}
        >
          <LogoViewer logo={selectedAsset?.logo} />
          <Typography type="TITLE_XS" color={theme.colors.gray200}>
            {selectedAsset?.name?.toLocaleUpperCase()}
          </Typography>
        </FlexContainer>
      ) : (
        <AssetButton
          text="Asset"
          onClick={() => {
            if (selectModalIsOpen) return
            setSelectModalIsOpen(true)
          }}
        />
      )}

      <Modal
        isOpen={selectModalIsOpen}
        onClickOutside={() => setSelectModalIsOpen(false)}
      >
        <SearchActionBar<TAsset>
          selectedAsset={null}
          backButtonClick={() => setSelectModalIsOpen(false)}
          searchText={searchText}
          items={assetsMappedList}
          emptyResultText="No result found. Fund your console first"
          handleSelect={(asset: SearchItem<TAsset>) => {
            if (!asset.data || !setSelectedAsset) return
            setSelectedAsset(asset.data)
            setSelectModalIsOpen(false)
          }}
          hideSecondary={hideSecondary}
        />
      </Modal>
    </FlexContainer>
  )
}
