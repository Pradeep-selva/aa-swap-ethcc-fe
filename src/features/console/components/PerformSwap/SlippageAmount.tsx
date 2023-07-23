import React from 'react'

import { FlexContainer, Typography } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

const SLIPPAGE_VALUES = [0.5, 5, 10]

export default function SlippageAmount() {
  const [selectedSwap, setSelectedSwap] = React.useState(0)

  const { theme } = useThemeContext()

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-end"
      gap={1.6}
    >
      <Typography type="BODY_MEDIUM_S" color={theme.colors.gray500}>
        Choose slippage
      </Typography>
      <FlexContainer>
        <S.SwapItemWrapper>
          {SLIPPAGE_VALUES.map((item) => {
            const isSelected = item === selectedSwap
            return (
              <S.SwapItem
                key={item}
                selected={isSelected}
                onClick={() => setSelectedSwap(item)}
              >
                <Typography type="BODY_MEDIUM_XS" shouldInheritColor>
                  {item}
                </Typography>
              </S.SwapItem>
            )
          })}
        </S.SwapItemWrapper>
      </FlexContainer>
    </FlexContainer>
  )
}
