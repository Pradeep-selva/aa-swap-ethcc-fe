import { useThemeContext } from '@/hooks/themeProvider'
import FlexContainer from '../../_wrappers/FlexContainer'
import Typography from '../Typography'

import * as S from './styles'

export type SearchModalItemProps = {
  assetName: string
  assetIcon: React.ReactNode | string
  assetValue: string
  assetSubtitle?: string
  onClick?: () => void
}

export default function SearchModalItem({
  assetName,
  assetIcon,
  assetValue,
  assetSubtitle,
  onClick
}: SearchModalItemProps) {
  const { theme } = useThemeContext()

  return (
    <S.MainWrapper onClick={onClick}>
      <FlexContainer gap={1.1} alignItems="center">
        {assetIcon}
        <FlexContainer flexDirection="column">
          <Typography color={theme.colors.gray200} type="BODY_MEDIUM_S">
            {assetName}
          </Typography>
          {assetSubtitle && (
            <Typography color={theme.colors.gray500} type="BODY_XS">
              {assetSubtitle}
            </Typography>
          )}
        </FlexContainer>
      </FlexContainer>
      <Typography color={theme.colors.gray400} type="TITLE_XS">
        {assetValue}
      </Typography>
    </S.MainWrapper>
  )
}
