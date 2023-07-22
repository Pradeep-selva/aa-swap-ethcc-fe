import { FlexContainer, Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type AddressCopiedTagProps = {
  text: string
} & S.StyledAddressCopiedTagProps

export default function AddressCopiedTag({
  text,
  isAbsolute,
  top,
  bottom,
  left,
  right
}: AddressCopiedTagProps) {
  const { theme } = useThemeContext()
  return (
    <S.StyledAddressCopiedTag
      isAbsolute={isAbsolute}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <FlexContainer justifyContent="center" gap={0.5}>
        <Typography type="BODY_XS" color={theme.colors.gray400}>
          {text}
        </Typography>
      </FlexContainer>
    </S.StyledAddressCopiedTag>
  )
}
