import { TAsset } from '@/features/console'
import {
  formatValueStringToCurrency,
  sliceDecimalString
} from '@/features/shared/utils/actions'
import { useThemeContext } from '@/hooks/themeProvider'
import LogoViewer from '../LogoViewer'

import Typography from '../Typography'

import * as S from './styles'

type WalletItemProps = {
  asset: TAsset
  onClick: (asset: TAsset) => void
  isLastItem?: boolean
}

export default function WalletItem({
  asset,
  onClick,
  isLastItem = false
}: WalletItemProps) {
  const { prices, value, logo, name, balanceOf } = asset
  const { theme } = useThemeContext()

  const handleItemClick = () => {
    onClick(asset)
  }

  return (
    <S.MainWrapper onClick={handleItemClick} isLastItem={isLastItem}>
      <S.AssetWrapper>
        <LogoViewer logo={logo} />
        <Typography type="TITLE_XS">{name.toLocaleUpperCase()}</Typography>
      </S.AssetWrapper>
      <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
        ${prices.default?.toFixed(2)}
      </Typography>
      <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
        {sliceDecimalString(balanceOf?.formatted || '0')}
      </Typography>
      <S.ValueWrapper>
        <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
          {formatValueStringToCurrency(value)}
        </Typography>
        {/* <FlexContainer justifyContent="flex-end">
          <Typography color={theme.colors.success} type="BODY_XS">
            ${amountChange}&nbsp;
          </Typography>
          <Typography color={theme.colors.success} type="BODY_XS">
            (+{percentageChange}%)
          </Typography>
        </FlexContainer> */}
      </S.ValueWrapper>
    </S.MainWrapper>
  )
}
