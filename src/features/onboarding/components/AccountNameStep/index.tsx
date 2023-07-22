import React, { useEffect } from 'react'
import { useEnsName } from 'wagmi'

import { useThemeContext } from '@/hooks/themeProvider'
import {
  CustomInput,
  FlexContainer,
  Panel,
  Typography,
  BlackTitleStrip,
  Address,
  OnboardingWalletsImage
} from '@/features/shared'
import { OnboardingFormData } from '@/features/onboarding/types'
import OnboardStepLayout from '../OnboardingStepLayout'

import * as S from './styles'

type AccountNameStepProps = {
  formDataKey: keyof OnboardingFormData
  data: string
  updateFields: <T>(values: T, key: keyof OnboardingFormData) => void
  isInvalid: boolean
  address?: Address
}

export default function AccountNameStep({
  formDataKey,
  data,
  address,
  updateFields,
  isInvalid
}: AccountNameStepProps) {
  const { theme } = useThemeContext()
  const { data: ensName } = useEnsName({ address })

  // const [ensName, setEnsName] = useState<string | null>(null)
  // useEffect(() => {
  //   setTimeout(() => setEnsName('JonhDoe.eth'), 1500)
  // }, [])

  useEffect(() => {
    if (ensName) updateFields<string>(ensName, formDataKey)
  }, [ensName])

  const handleInputChange = (e: any) => {
    updateFields<string>(e.target.value, formDataKey)
  }

  return (
    <OnboardStepLayout title="Cool Title for onboarding">
      <S.AccountNameStepWrapper>
        <Panel
          titleType="BODY_MEDIUM_S"
          titleColor={theme.colors.gray300}
          padding="0"
          title="Profile Set Up"
        >
          <S.ContentWrapper>
            <FlexContainer flexDirection="column" gap={1.2}>
              <Typography type="BODY_S" color={theme.colors.gray300}>
                Enter your username
              </Typography>
              <CustomInput
                type="text"
                placeholder="your name"
                value={data}
                maxLength={50}
                onChange={handleInputChange}
                isInvalid={isInvalid}
              />
            </FlexContainer>
            <S.ValidationRules>
              <Typography color={theme.colors.gray400} type="BODY_XS">
                Username is private. Use <span>A-z</span> <span>0-9</span> and
                underscore. Min length - <span>5 char</span>, max -{' '}
                <span>12 char</span>.
              </Typography>
            </S.ValidationRules>
          </S.ContentWrapper>
        </Panel>
      </S.AccountNameStepWrapper>
    </OnboardStepLayout>
  )
}
