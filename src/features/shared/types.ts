import { BigNumber, Transaction } from 'ethers'

import { defaultTheme } from '@/lib/styledComponents'

export type Address = `0x${string}`

export type TContract = {
  address: string
  title: string
}

export type TColors = keyof typeof defaultTheme.colors

export type SearchItem<T> = {
  id: string
  name: string
  icon: React.ReactNode | string
  secondaryIcon?: React.ReactNode | string
  secondaryInfo?: React.ReactNode | string
  data: T
}

export type ItemCategoryType<T> = {
  categoryTitle: string
  items: SearchItem<T>[] // asset, strategy or automated Action
}

export interface Log {
  blockNumber: number
  blockHash: string
  transactionIndex: number
  removed: boolean
  address: string
  data: string
  topics: Array<string>
  transactionHash: string
  logIndex: number
}

export interface TransactionReceipt {
  to: string
  from: string
  contractAddress: string
  transactionIndex: number
  root?: string
  gasUsed: BigNumber
  logsBloom: string
  blockHash: string
  transactionHash: string
  logs: Array<Log>
  blockNumber: number
  confirmations: number
  cumulativeGasUsed: BigNumber
  effectiveGasPrice: BigNumber
  byzantium: boolean
  type: number
  status?: number
}

export interface TransactionResponse extends Transaction {
  hash: string
  // Only if a transaction has been mined
  blockNumber?: number
  blockHash?: string
  timestamp?: number
  confirmations: number
  // Not optional (as it is in Transaction)
  from: string
  // The raw transaction
  raw?: string
  // This function waits until the transaction has been mined
  wait: (confirmations?: number) => Promise<TransactionReceipt>
}

export type ApiResponse<T> = {
  success: boolean
  data: T
}

export type SupportedChainIds = any

export type ReleasePanelsDataProps = {
  release: string
  date: string
  data: {
    icon: React.ReactNode
    title: {
      text: string
      highlighted?: boolean
    }
    titleTag: string
    subtitle: string

    blur?: boolean
  }[]
}[]
