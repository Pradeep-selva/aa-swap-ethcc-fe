import { EthFilledIcon } from '../../icons'
import TooltipBox from '../TooltipBox'

import * as S from './styles'

export default function HeaderChainIcon() {
  return (
    <S.HeaderChainIconWrapper>
      <TooltipBox
        right={0.5}
        content="At present, Console operates solely on the Ethereum mainnet."
      >
        <S.StyledHeaderChainIcon>
          <EthFilledIcon />
        </S.StyledHeaderChainIcon>
      </TooltipBox>
    </S.HeaderChainIconWrapper>
  )
}
