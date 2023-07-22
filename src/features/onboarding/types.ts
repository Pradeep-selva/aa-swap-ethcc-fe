export type OnboardingStepsName = 'accountName'
export type OnboardingStep = {
  index: number
  component: React.ReactNode
  name: OnboardingStepsName
  invalidIf?: boolean // Condition to be checked if it allow next step
}

export type OnboardingFormData = {
  accountName: string
}
