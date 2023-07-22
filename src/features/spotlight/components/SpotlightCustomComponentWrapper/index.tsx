import React from 'react'
import {
  CloseButtonBox,
  FlexContainer,
  TagComponent,
  Typography,
  ChevronIcon
} from '@/features/shared'
import useSpotlightStore, { SpotlightState } from '../../store'
import { getTheme } from '@/lib/styledComponents'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type SpotlightCustomComponentWrapperProps = {
  title: string
  children: React.ReactNode
  handleBackButton?: () => void
  showBackButton?: boolean
  backButtonIcon?: React.ReactNode
}

export default function SpotlightCustomComponentWrapper({
  title,
  children,
  showBackButton = true,
  handleBackButton,
  backButtonIcon = <ChevronIcon color={getTheme().colors.gray400} />
}: SpotlightCustomComponentWrapperProps) {
  const { theme } = useThemeContext()
  const [selectedAsset, clearSelectedAsset, setSpotlightState] =
    useSpotlightStore((store) => [
      store.selectedAsset,
      store.clearSelectedAsset,
      store.setSpotlightState
    ])

  return (
    <S.SpotlightModalWrapper>
      <S.SpotlightModalHeader>
        <FlexContainer gap={1.6} alignItems="center">
          {!!showBackButton && handleBackButton && (
            <CloseButtonBox
              closeButtonClick={handleBackButton}
              icon={backButtonIcon}
            />
          )}
          <Typography type="BODY_MEDIUM_S" color={theme.colors.gray500}>
            {title}
          </Typography>
        </FlexContainer>
        {selectedAsset && (
          <FlexContainer
            alignItems="center"
            gap={0.8}
            justifyContent="flex-end"
          >
            <TagComponent
              text={selectedAsset.name.toUpperCase()}
              icon={selectedAsset.logo}
              onClose={() => {
                clearSelectedAsset()
                setSpotlightState(SpotlightState.IDLE)
              }}
            />
          </FlexContainer>
        )}
      </S.SpotlightModalHeader>

      <div>{children}</div>
    </S.SpotlightModalWrapper>
  )
}
