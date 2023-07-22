import { Address } from '../../../types'
import { useThemeContext } from '@/hooks/themeProvider'
import { EthFilledIcon } from '../../icons'
import Typography from '../Typography'
import FlexContainer from '../../_wrappers/FlexContainer'

import * as S from './styles'

type SubAccountSelector = {
  account: Address
  minify?: boolean
}

export default function SubAccountSelector({
  account,
  minify
}: SubAccountSelector) {
  const { theme } = useThemeContext()

  return (
    <S.MainWrapper>
      <FlexContainer style={{ width: '100%' }} alignItems="center" gap={0.9}>
        <EthFilledIcon height={20} width={20} />
        {!minify && (
          <Typography color={theme.colors.gray500} type="TITLE_XS">
            {!!account && account.substring(0, 5)}...
          </Typography>
        )}
        {/* <DownArrow height={10} width={10} /> */}
      </FlexContainer>
      {/* {!minify && (
        <Tooltip
          placeBottom
          content={
            <Typography type="BODY_XS" color={theme.colors.gray200}>
              Subaccount Selector
            </Typography>
          }
        />
      )} */}
    </S.MainWrapper>
  )
}
