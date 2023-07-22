import {
  Typography,
  FlexContainer,
  SafeLogo,
  GelatoIcon
} from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

export default function PoweredBy() {
  const { theme } = useThemeContext()
  return (
    <FlexContainer
      alignItems="center"
      width={100}
      gap={1.6}
      flexDirection="column"
    >
      <Typography color={theme.colors.gray500} type="BODY_XS">
        Powered by
      </Typography>
      <FlexContainer gap={0.8}>
        <SafeLogo height={32} width={124} />
        {/* <GelatoIcon height={32} width={124} /> */}
      </FlexContainer>
    </FlexContainer>
  )
}
