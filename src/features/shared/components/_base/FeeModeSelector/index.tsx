import { FlexContainer, LighteningIcon, Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

export type FeeModesProps = 'normal' | 'ape'

type FeeModeSelectorProps = {
  mode: FeeModesProps
  gwei: number
  setMode: () => void
}

export default function FeeModeSelector({
  mode = 'normal',
  setMode,
  gwei
}: FeeModeSelectorProps) {
  const { theme } = useThemeContext()

  return (
    <S.StyledFeeModeSelector onClick={setMode} mode={mode}>
      <FlexContainer flex={false} alignItems="flex-end" flexDirection="column">
        <FlexContainer alignItems="center" gap={0.2}>
          {mode === 'ape' && <LighteningIcon />}
          <Typography
            color={mode === 'ape' ? theme.colors.warning : theme.colors.gray200}
            type="BODY_MEDIUM_XS"
          >
            {mode === 'ape' ? 'Ape' : 'Normal'}
          </Typography>
        </FlexContainer>
        <Typography color={theme.colors.gray400} type="BODY_XS">
          {gwei}&nbsp;gwei
        </Typography>
      </FlexContainer>
      <S.ModeSelect mode={mode}>
        <S.Mode mode={mode === 'normal' ? mode : 'unselected'} />
        <S.Mode mode={mode === 'ape' ? mode : 'unselected'} />
      </S.ModeSelect>
    </S.StyledFeeModeSelector>
  )
}
