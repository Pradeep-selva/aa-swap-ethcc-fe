import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Router from 'next/router'

import { apiInstance, API_ENDPOINTS } from '@/lib/axios'
import {
  Button,
  DelayedLottiesLoading,
  FlexContainer,
  LoaderLottie,
  Typography,
  isValidUsername,
  localStorageService
} from '@/features/shared'
import { OnboardingFormData, OnboardingStep } from '@/features/onboarding/types'

import AccountNameStep from '../AccountNameStep'
import * as webauthn from '@passwordless-id/webauthn'

const Header = dynamic(() => import('@/features/shared/components/Header'), {
  ssr: false
})

import * as S from './styles'

export default function OnboardFlow() {
  const { push } = useRouter()

  const [formData, setFormData] = useState<OnboardingFormData>({
    accountName: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorageService.getAuthUserData() !== null) {
      Router.push('/perform-swap')
      return
    }
  }, [])

  function updateFields(value: any, key: keyof OnboardingFormData) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const onboardStep: OnboardingStep = {
    index: 1,
    name: 'accountName',
    invalidIf: !isValidUsername(formData.accountName),
    component: (
      <AccountNameStep
        formDataKey="accountName"
        data={formData.accountName}
        updateFields={updateFields}
        address={'' as any}
        isInvalid={!isValidUsername(formData.accountName)}
      />
    )
  }

  async function handleSubmit() {
    try {
      const res = await webauthn.client.register(
        formData.accountName,
        window.crypto.randomUUID(),
        { authenticatorType: 'auto' }
      )

      const {
        username,
        credential: { id: credentialId }
      } = webauthn.parsers.parseRegistration(res)

      setLoading(true)
      // const {
      //   data: { safeAddress }
      // } = await apiInstance.post<{ safeAddress: string }>(
      //   API_ENDPOINTS.createAccount(),
      //   {
      //     clientId: credentialId
      //   }
      // )
      await timeout(3000)

      setLoading(false)
      const safeAddress = '0x80760A7eeafA31cC68F3D488ae48590e66a40Db7'

      localStorageService.setAuthUserData(username, credentialId, safeAddress)
      push('/perform-swap')
    } catch (err) {
      console.error('[ERROR] on handleSubmit', err)
    }
  }

  function timeout(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  return (
    <>
      <Header />
      <S.OnboardWrapper>
        {!loading ? (
          <>
            <S.StepWrapper>{onboardStep.component}</S.StepWrapper>

            <FlexContainer gap={1.2}>
              <Button
                onClick={handleSubmit}
                disabled={onboardStep.invalidIf}
                buttonSize="L"
              >
                Create account
              </Button>
            </FlexContainer>
          </>
        ) : (
          <FlexContainer
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={2}
          >
            <DelayedLottiesLoading lotties={[LoaderLottie]} />
            <Typography type="BODY_MEDIUM_M">
              We are getting your account ready ...
            </Typography>
          </FlexContainer>
        )}
      </S.OnboardWrapper>
    </>
  )
}
