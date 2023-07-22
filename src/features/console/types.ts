import { BigNumber } from 'ethers'

import { Address } from '../shared'

export type BalanceOf = {
  decimals: number
  formatted: string
  symbol: string
  value: BigNumber
}

export type TAsset = {
  name: string
  icon?: React.ReactNode | string
  address: Address
  chainId?: number
  logo: string
  decimals: number
  balanceOf?: BalanceOf
  value: string
  prices: {
    default: number
  }
  apy?: number
  assetSubtitle?: string
  actions: Action[]
}

export type Action = {
  id: number
  name: string
  logo: string
  apy: number
  chainId: number
  category: 'strategy' | 'action' | 'automation'
  getTransactionCustomView?: (params?: any) => React.ReactNode
  getTransactionExpandedCustomView?: (params?: any) => React.ReactNode
  metadata?: {
    overview: string
    supportedAssets: string[]
    baseEntityId: number
  }
}

export type ActionConfig = {
  getTransactionCustomView: (params?: any) => React.ReactNode
  spotlightCustomView?: React.ReactNode
  secondaryInfo?: React.ReactNode | string
  secondaryIcon?: React.ReactNode | string
  getTransactionExpandedCustomView: (params?: any) => React.ReactNode
  handleActionSpotlightClick?: (action: ActionConfig) => void //This is used whenever action doesnt have a custom view and goes straight to txn builder
} & Action

export type ActivityItemCategory =
  | 'dca_init'
  | 'cowswap_request'
  | 'swap'
  | 'dca_close'
  | 'transfer'
