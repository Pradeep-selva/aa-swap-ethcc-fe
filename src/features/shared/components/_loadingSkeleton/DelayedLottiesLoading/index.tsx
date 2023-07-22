import { useState, useEffect } from 'react'

import { FlexContainer, HrLine, InlineLottieWrapper } from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type DelayedLottiesLoading = {
  lotties: any[]
  itemNumber?: number
  delayInSeconds?: number
  lottieDivider?: boolean
}

export default function DelayedLottiesLoading({
  itemNumber = 1,
  delayInSeconds = 0,
  lotties,
  lottieDivider = false
}: DelayedLottiesLoading) {
  const { theme } = useThemeContext()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < itemNumber) {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }, delayInSeconds * 1000)

    return () => clearInterval(timer)
  }, [currentIndex, itemNumber, delayInSeconds])

  return (
    <S.StyledDelayedLotties>
      {[...Array(itemNumber)].map((item, idx) => (
        <div key={idx}>
          <FlexContainer justifyContent="space-between" key={idx}>
            <InlineLottieWrapper
              key={idx}
              lotties={lotties}
              isStopped={idx + 1 > currentIndex}
            />
          </FlexContainer>
          {lottieDivider && idx + 1 !== itemNumber && (
            <HrLine paddingX={0} color={theme.colors.gray700} />
          )}
        </div>
      ))}
    </S.StyledDelayedLotties>
  )
}
