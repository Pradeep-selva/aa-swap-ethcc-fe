import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Router from 'next/router'

import {
  Button,
  FlexContainer,
  isValidUsername,
  localStorageService
} from '@/features/shared'
import { OnboardingFormData, OnboardingStep } from '@/features/onboarding/types'

import AccountNameStep from '../AccountNameStep'

const Header = dynamic(() => import('@/features/shared/components/Header'), {
  ssr: false
})

import * as S from './styles'

export default function OnboardFlow() {
  const [formData, setFormData] = useState<OnboardingFormData>({
    accountName: ''
  })

  useEffect(() => {
    if (localStorageService.getAuthUserData() !== null) {
      Router.push('/limit-order')
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
    // TODO: handle webauthn here
    console.log('submitted')
  }

  return (
    <>
      <Header />
      <S.OnboardWrapper>
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
      </S.OnboardWrapper>
    </>
  )
}
