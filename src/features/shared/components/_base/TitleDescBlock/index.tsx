import { defaultTheme } from '@/lib/styledComponents'
import { FlexContainer, NeonLightStrip, Typography } from '@/features/shared'

import * as S from './styles'

export type TitleDescPropsProps = {
  leftTitle: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  rightTitle?: string
  leftTitleColor?: string
  rightTitleColor?: string
  hasLightStrip?: boolean
}

export default function TitleDescBlock({
  leftTitle,
  leftIcon,
  rightIcon,
  rightTitle,
  leftTitleColor = defaultTheme.colors.gray500,
  rightTitleColor = defaultTheme.colors.gray200,
  hasLightStrip
}: TitleDescPropsProps) {
  return (
    <S.StyledTitleDescBlock>
      {!!hasLightStrip && <NeonLightStrip />}
      <FlexContainer alignItems="center" gap={0.9}>
        {leftIcon}
        <Typography color={leftTitleColor} type="TITLE_XS">
          {leftTitle}
        </Typography>
      </FlexContainer>
      <FlexContainer justifyContent="flex-end" alignItems="center" gap={0.9}>
        {rightTitle && (
          <Typography color={rightTitleColor} type="BODY_MEDIUM_S">
            {rightTitle}
          </Typography>
        )}
        {!!rightIcon && rightIcon}
      </FlexContainer>
    </S.StyledTitleDescBlock>
  )
}
