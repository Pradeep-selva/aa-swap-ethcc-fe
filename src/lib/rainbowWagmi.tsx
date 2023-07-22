import '@rainbow-me/rainbowkit/styles.css'
import {
  configureChains,
  createClient,
  goerli,
  mainnet,
  WagmiConfig
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import {
  connectorsForWallets,
  darkTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'
import {
  walletConnectWallet,
  metaMaskWallet,
  rainbowWallet
} from '@rainbow-me/rainbowkit/wallets'

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || ''
    }),
    publicProvider()
  ]
)

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [metaMaskWallet({ chains })]
  },
  {
    groupName: 'Others',
    wallets: [walletConnectWallet({ chains }), rainbowWallet({ chains })]
  }
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

type RainbowWagmiProviderProps = {
  children: React.ReactNode
}

export default function RainbowWagmiProvider({
  children
}: RainbowWagmiProviderProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        appInfo={{
          appName: 'Brah Accounts'
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
