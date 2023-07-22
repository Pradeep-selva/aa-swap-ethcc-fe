import { defaultTheme } from '@/lib/styledComponents'
import TitleDescBlock, { TitleDescPropsProps } from '../TitleDescBlock'
import NeonLightStrip from '../NeonLightStrip'

import * as S from './styles'

type LeftNeonLightWrapperProps = {
  stripColor?: string
  bgColor?: string
  wrapperHeight?: number
} & TitleDescPropsProps

export default function LeftNeonLightWrapper({
  stripColor,
  bgColor = defaultTheme.colors.gray800,
  wrapperHeight = 5.6,
  ...props
}: LeftNeonLightWrapperProps) {
  return (
    <S.StyledLeftNeonLightWrapper
      bgColor={bgColor}
      wrapperHeight={wrapperHeight}
    >
      <NeonLightStrip color={stripColor} />
      <TitleDescBlock {...props} />
    </S.StyledLeftNeonLightWrapper>
  )
}
