import { ConnectButton } from '@rainbow-me/rainbowkit'

import Profile from '../Profile'
import { useMemo } from 'react'
import localStorageService from '@/features/shared/services/localStorage'

type CustomConnectButtonProps = {
  consoleAddress?: string
  customChangeChainButton?: React.ReactNode
}

export default function CustomConnectButton({
  customChangeChainButton
}: CustomConnectButtonProps) {
  const authUser = useMemo(() => localStorageService.getAuthUserData(), [])
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal
      }) => {
        return authUser ? (
          <Profile onClick={openAccountModal} name={authUser.safeAddress} />
        ) : (
          <></>
        )
      }}
    </ConnectButton.Custom>
  )
}
