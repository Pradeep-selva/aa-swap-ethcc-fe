import { Meta, StoryObj } from '@storybook/react'
import { WalletItem } from '@/features/shared'
import { BigNumber } from 'ethers'

export default {
  title: '_Base/WalletItem',
  component: WalletItem
} as Meta

type Story = StoryObj<typeof WalletItem>

export const Component: Story = {
  args: {
    asset: {
      name: 'frax',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      chainId: 1,
      logo: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
      decimals: 18,
      prices: {
        default: 1
      },
      apy: 0,
      value: '0.0',
      actions: [
        {
          id: 2,
          name: 'Deploy to AAVE GHO',
          logo: 'https://aavegotchi.com/images/logo.png',
          apy: 5.2,
          chainId: 137,
          category: 'strategy',
          metadata: {
            overview: 'Deploy your FRAX to Aavegotchi to earn GHST rewards',
            supportedAssets: ['FRAX'],
            baseEntityId: 1
          }
        }
      ],
      balanceOf: {
        decimals: 18,
        formatted: '0.0',
        symbol: 'WETH',
        value: BigNumber.from(0)
      }
    }
  }
}
