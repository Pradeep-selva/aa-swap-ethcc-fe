import { BigNumber } from 'ethers'
import { Meta, StoryObj } from '@storybook/react'

import { SearchBar } from '@/features/shared'
import { TAsset } from '@/features/console'

export const mockUserAssets: TAsset[] = [
  {
    name: 'frax',
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chainId: 1,
    logo: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    decimals: 18,
    prices: {
      default: 1
    },
    apy: 0,
    value: '3200000',
    balanceOf: {
      decimals: 6,
      formatted: '0',
      symbol: 'USDC',
      value: BigNumber.from(0)
    },
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
    ]
  }
]

export default {
  title: '_Base/SearchBar',
  component: SearchBar
} as Meta

type Story = StoryObj<typeof SearchBar>

export const Component: Story = {
  args: {
    placeholder: 'Searchbar'
  }
}

export const AssetSelected: Story = {
  args: {
    selectedAsset: {
      ...mockUserAssets[0],
      address: '0x123',
      value: '123'
    }
  }
}
