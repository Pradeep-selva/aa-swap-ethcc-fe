import { useThemeContext } from '@/hooks/themeProvider'
import { CloseButtonBox, FlexContainer, HrLine } from '@/features/shared'

import * as S from './styles'
import { useEffect } from 'react'

type ClosableModalWrapperProps = {
  title: React.ReactNode
  children: React.ReactNode
  closeButtonClick: () => void
  width?: number
}

export default function ClosableModalWrapper({
  closeButtonClick,
  title,
  children,
  width = 54.4
}: ClosableModalWrapperProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeButtonClick()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [closeButtonClick])

  const { theme } = useThemeContext()
  return (
    <S.StyledClosableModalWrapper width={width}>
      <FlexContainer
        justifyContent="space-between"
        width={100}
        padding="2.2rem 1.6rem"
      >
        {title}
        <CloseButtonBox closeButtonClick={closeButtonClick} />
      </FlexContainer>
      <HrLine paddingX={0} color={theme.colors.gray700} />
      {children}
    </S.StyledClosableModalWrapper>
  )
}
