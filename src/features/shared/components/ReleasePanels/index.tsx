import { Button, FlexContainer, PoweredBy, Typography } from '@/features/shared'

import * as S from './styles'

type ReleasePanelsProps = {
  buttonText: string
  onButtonClick?: () => void
}

export default function ReleasePanels({
  buttonText,
  onButtonClick
}: ReleasePanelsProps) {
  return (
    <S.StyledReleasePanels>
      <FlexContainer justifyContent="center">
        <S.TitleWrapper>
          <FlexContainer flexDirection="column" gap={2}>
            <Typography textAlign="center" type="TITLE_XL">
              Welcome.
            </Typography>
          </FlexContainer>
          <Button onClick={onButtonClick} buttonType="primary">
            {buttonText}
          </Button>
        </S.TitleWrapper>
      </FlexContainer>
      <FlexContainer
        gap={11.2}
        flexDirection="column"
        padding="0 11.4rem 4rem 11.4rem"
      >
        {/* <ReleasePanelTiles /> */}
        <PoweredBy />
      </FlexContainer>
    </S.StyledReleasePanels>
  )
}
