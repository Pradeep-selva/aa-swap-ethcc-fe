import { useThemeContext } from '@/hooks/themeProvider'
import { Typography, FlexContainer, Close } from '@/features/shared'

import * as S from './styles'

type OnboardingHintProps = {
  title: string
  subtitle: string
  hintChips: { title: string; darkAccent?: boolean }[]
  closeHint: () => void
}

export default function OnboardingHint({
  title,
  subtitle,
  hintChips,
  closeHint
}: OnboardingHintProps) {
  const { theme } = useThemeContext()

  return (
    <S.StyledOnboardingHint>
      <FlexContainer
        style={{ width: '100%' }}
        alignItems="center"
        gap={0.4}
        justifyContent="space-between"
      >
        <Typography
          style={{ fontStyle: 'italic' }}
          color={theme.colors.console2}
          type="TITLE_XS"
        >
          {title}
        </Typography>
        <Close onClick={closeHint} color={theme.colors.console2} />
      </FlexContainer>
      <Typography color={theme.colors.gray400} type="BODY_XS">
        {subtitle}
      </Typography>
      {hintChips && (
        <FlexContainer gap={0.4}>
          {hintChips.map((item, idx) => (
            <S.Chips
              darkAccent={item.darkAccent ? item.darkAccent : false}
              key={idx}
            >
              <Typography type="BODY_MEDIUM_XS">{item.title}</Typography>
            </S.Chips>
          ))}
        </FlexContainer>
      )}
    </S.StyledOnboardingHint>
  )
}
