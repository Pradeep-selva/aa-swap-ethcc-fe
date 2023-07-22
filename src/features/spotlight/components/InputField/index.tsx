import { BigNumber } from 'ethers'
import React from 'react'

import { TAsset } from '@/features/console'
import { useThemeContext } from '@/hooks/themeProvider'
import {
  FlexContainer,
  TokenInput,
  Typography,
  formatUnits,
  isNotZero,
  sliceDecimalString
} from '@/features/shared'
import InputAssetSelector from '../InputAssetSelector'

type InputFieldProps = {
  title: string
  inputValue: string
  selectedAsset: TAsset | null
  getMaxTokenBalanceAvailable: BigNumber
  setSelectedAsset?: (asset: TAsset) => void
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  icon?: React.ReactNode | string
  availableText?: string
  availableAssets?: TAsset[]
  disabled?: boolean
}

export default function SpotlightInputField({
  title,
  icon,
  inputValue,
  selectedAsset,
  getMaxTokenBalanceAvailable,
  availableText,
  setInputValue,
  setSelectedAsset,
  availableAssets = [],
  disabled = false
}: InputFieldProps) {
  const { theme } = useThemeContext()

  const handleMaxClick = () => {
    if (!selectedAsset) return
    setInputValue(
      formatUnits(getMaxTokenBalanceAvailable, selectedAsset.decimals)
    )
  }

  const handleAssetSelect = (asset: TAsset) => {
    if (!setSelectedAsset) return
    setInputValue('')
    setSelectedAsset(asset)
  }

  return (
    <FlexContainer
      flexDirection="column"
      gap={1.2}
      width={100}
      style={{ padding: '1.6rem' }}
    >
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        width={100}
      >
        <FlexContainer alignItems="center" gap={0.8}>
          {!!icon && icon}
          <Typography type="BODY_MEDIUM_S" color={theme.colors.gray400}>
            {title}
          </Typography>
        </FlexContainer>
        <FlexContainer justifyContent="flex-end" gap={0.4}>
          <Typography type="BODY_MEDIUM_XS" color={theme.colors.gray500}>
            {availableText || 'Available'}
          </Typography>
          <Typography type="BODY_MEDIUM_XS" color={theme.colors.gray200}>
            {sliceDecimalString(
              formatUnits(getMaxTokenBalanceAvailable, selectedAsset?.decimals),
              8
            ) || '--'}
          </Typography>
          <FlexContainer
            flex={false}
            style={{ marginLeft: '0.4rem', cursor: 'pointer' }}
            onClick={handleMaxClick}
          >
            <Typography type="BODY_MEDIUM_XS" color={theme.colors.gray400}>
              MAX
            </Typography>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        justifyContent="space-between"
        width={100}
        alignItems="center"
      >
        <FlexContainer>
          <TokenInput
            value={inputValue}
            tokenBalance={getMaxTokenBalanceAvailable}
            onChange={setInputValue}
            decimals={selectedAsset?.decimals || 18}
            disabled={
              selectedAsset === null ||
              !isNotZero(getMaxTokenBalanceAvailable.toString())
            }
          />
        </FlexContainer>
        <InputAssetSelector
          selectedAsset={selectedAsset}
          availableAssets={availableAssets}
          setSelectedAsset={handleAssetSelect}
          disabled={disabled}
        />
      </FlexContainer>
    </FlexContainer>
  )
}
