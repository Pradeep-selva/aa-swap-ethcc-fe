import { useState } from 'react'

import { Header, ReleasePanels } from '@/features/shared'
import OnboardFlow from '../OnboardFlow'

export default function OnboardingReleasePanels() {
  const [startOnboarding, setStartOnboarding] = useState<boolean>(false)

  if (startOnboarding) return <OnboardFlow />
  return (
    <>
      <Header />
      <ReleasePanels
        buttonText=" Create Account"
        onButtonClick={() => setStartOnboarding(true)}
      />
    </>
  )
}
