import { TooltipIcon } from '../../icons'
import { defaultTheme } from '@/lib/styledComponents'
import Typography from '../Typography'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type TooltipBoxProps = {
  content: string | React.ReactNode
  tooltipWidth?: number
  children?: React.ReactNode
} & S.ContentWrapperProps

export default function TooltipBox({
  content,
  direction = 'bottom',
  left,
  right,
  top,
  bottom,
  delayToCloseInSeconds = 0.1,
  tooltipWidth = 20,
  children = (
    <TooltipIcon height={16} width={16} color={defaultTheme.colors.gray500} />
  )
}: TooltipBoxProps) {
  const { theme } = useThemeContext()

  return (
    <S.StyledTooltipBox>
      <S.ContentWrapper
        direction={direction}
        left={left}
        right={right}
        top={top}
        bottom={bottom}
        tooltipWidth={tooltipWidth}
        delayToCloseInSeconds={delayToCloseInSeconds}
      >
        {typeof content === 'string' ? (
          <Typography type="BODY_XS" color={theme.colors.gray200}>
            {content}
          </Typography>
        ) : (
          content
        )}
      </S.ContentWrapper>
      {children}
    </S.StyledTooltipBox>
  )
}
