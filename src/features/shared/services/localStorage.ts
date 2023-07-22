import { OnboardingFormData } from '@/features/onboarding/types'

const storageKeys = {
  authUser: 'AAauthUser'
}

export type CachedOnboardData = OnboardingFormData & { stepIndex: number }

const localStorageService = {
  setAuthUserData: (
    userName: string,
    credentialId: string,
    safeAddress: string
  ) => {
    window.localStorage.setItem(
      storageKeys.authUser,
      JSON.stringify({
        userName,
        credentialId,
        safeAddress
      })
    )
  },

  getAuthUserData: (): {
    userName: string
    credentialId: string
    safeAddress: string
  } | null => {
    const data = globalThis.window?.localStorage.getItem(storageKeys.authUser)
    console.log('retreived auth data:', data ? JSON.parse(data) : null)
    return data ? JSON.parse(data) : null
  }
}

export default localStorageService
