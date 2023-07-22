import { useCallback, useEffect, useState } from 'react'

import {
  OnboardingStep,
  OnboardingStepsName
} from '@/features/onboarding/types'

export function useOnboardingStep(steps: OnboardingStep[], initialStep = 0) {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep)

  useEffect(() => {
    setCurrentStepIndex(initialStep)
  }, [initialStep])

  const goToNextStep = useCallback(() => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }, [steps.length])

  const goToPreviousStep = useCallback(() => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }, [])

  function goTo(index: number) {
    if (index > steps.length - 1) return
    setCurrentStepIndex(index)
  }

  function goToStep(stepName: OnboardingStepsName) {
    const wantedStep = steps.find((_step) => _step.name === stepName)
    if (!wantedStep) return
    setCurrentStepIndex(wantedStep.index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isLastStepBeforeCreating: currentStepIndex === steps.length - 2,
    goTo,
    goToStep,
    goToNextStep,
    goToPreviousStep
  }
}
