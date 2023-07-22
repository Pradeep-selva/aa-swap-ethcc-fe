import { Meta, StoryObj } from '@storybook/react'
import { BigNumber } from 'ethers'

import { TAsset } from '@/features/console'
import { ItemCategoryType, SearchActionBar } from '@/features/shared'

export default {
  title: 'SearchActionBar',
  component: SearchActionBar
} as Meta

type Story = StoryObj<typeof SearchActionBar>

const items: ItemCategoryType<TAsset>[] = [
  {
    categoryTitle: 'Assets',
    items: [
      {
        id: '2b6fb4cc-1f77-4da3-b040-53128fa21e94',
        name: 'ETH',
        icon: 'https://static.gearbox.fi/tokens/weth.svg',
        secondaryInfo: '0.0766',
        data: {
          name: 'eth',
          address: '0x0000000000000000000000000000000000000000',
          logo: 'https://static.gearbox.fi/tokens/weth.svg',
          decimals: 18,
          chainId: 1,
          prices: {
            default: 0
          },
          apy: 0,
          actions: [
            {
              id: 1,
              name: 'Deploy into Aave-Gho strategy',
              logo: 'https://icons.llamao.fi/icons/protocols/aave?w=24&h=24',
              apy: 13.9,
              chainId: 1,
              category: 'strategy',
              metadata: {
                overview: 'Deploy into Aave-Gho strategy',
                supportedAssets: ['0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d'],
                baseEntityId: 1
              }
            },
            {
              id: 2,
              name: 'Adjust position on Aave-Gho strategy',
              logo: 'https://icons.llamao.fi/icons/protocols/aave?w=24&h=24',
              apy: 0,
              chainId: 1,
              category: 'strategy',
              metadata: {
                overview: 'Deploy into Aave-Gho strategy',
                supportedAssets: ['0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d'],
                baseEntityId: 1
              }
            },
            {
              id: 3,
              name: 'Exit position on Aave-Gho strategy',
              logo: 'https://icons.llamao.fi/icons/protocols/aave?w=24&h=24',
              apy: 0,
              chainId: 1,
              category: 'strategy',
              metadata: {
                overview: 'Deploy into Aave-Gho strategy',
                supportedAssets: ['0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d'],
                baseEntityId: 1
              }
            },
            {
              id: 4,
              name: 'Swap',
              logo: 'https://icons.llama.fi/cow-swap.jpg',
              apy: 0,
              chainId: 1,
              category: 'action',
              metadata: {
                overview: 'swap',
                supportedAssets: ['0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d'],
                baseEntityId: 1
              }
            }
          ],
          value: '0.0',
          balanceOf: {
            decimals: 18,
            formatted: '0.0766',
            symbol: 'ETH',
            value: BigNumber.from(1)
          }
        }
      }
    ]
  }
]

export const Component: Story = {
  args: {
    items: items
  }
}

export const WithSelectedAsset: Story = {
  args: {
    items: items,
    selectedAsset: {
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
