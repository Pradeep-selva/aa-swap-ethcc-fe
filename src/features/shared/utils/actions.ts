import { TAsset } from '@/features/console'
import { fetchEnsResolver, FetchEnsResolverResult } from '@wagmi/core'
import { BigNumber, BigNumberish } from 'ethers'
import {
  formatUnits as formatUnitsEthers,
  parseUnits as parseUnitsEthers,
  verifyMessage as verifyMessageEthers
} from 'ethers/lib/utils.js'
import { V4Options, v4 } from 'uuid'
import { Address } from '../types'

export const copyToClipboard = async (text?: string) => {
  try {
    const toCopy = text || ''
    await navigator.clipboard.writeText(toCopy)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

export const openInNewTab = (href: string) => {
  window.open(href, '_blank', 'noreferrer noopener')
}

export const truncateString = (str: string, start = 6, end = 6) => {
  const truncated = `${str.substring(0, start)}...${str.substring(
    str.length - end
  )}`
  return truncated
}

export const generateUUID = (options?: V4Options) => {
  return v4(options)
}

export const formatUnits = (
  value: BigNumberish,
  unitName?: string | BigNumberish
): string => {
  if (!value) return '0'
  return formatUnitsEthers(value, unitName)
}

export const parseUnits = (
  value: string,
  unitName?: BigNumberish | undefined
): BigNumber => {
  return parseUnitsEthers(value, unitName)
}

export const multiplyBNWithFloat = (
  bn: BigNumber | string,
  number: number,
  decimals = 18
): BigNumber => {
  const oneBN: BigNumber = parseUnits('1', decimals)
  const bnForSure = BigNumber.from(bn)
  const numberBN = parseUnits(number.toString(), decimals)

  return bnForSure.mul(numberBN).div(oneBN)
}

export const formatToCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount)
}

export const formatValueStringToCurrency = (
  amount: string,
  currency = 'USD'
) => {
  const floatAmount = parseFloat(amount)
  if (isNaN(floatAmount)) return '0.00'

  return formatToCurrency(floatAmount, currency)
}

export const sliceDecimalString = (input: string, decimals = 6): string => {
  if (!input) return '0'
  const parts = input.split('.')

  if (parts.length === 1) {
    // Input string does not contain a decimal point
    return input
  }

  const integerPart = parts[0]

  let decimalPart = parts[1]

  decimalPart = decimalPart.slice(0, decimals)

  while (decimalPart.endsWith('0')) {
    // Remove trailing zeros
    decimalPart = decimalPart.slice(0, -1)
  }

  if (decimalPart.length === 0) {
    return integerPart
  }
  return `${integerPart}.${decimalPart}`
}

export const capitalizeString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const waitFor = async (ms = 1500) =>
  await new Promise((resolve) => setTimeout(resolve, ms))

export const isValidEthereumAddress = (address: string): boolean => {
  if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
    return false
  }
  return true
}

export const isValidENSName = async (
  value: string
): Promise<FetchEnsResolverResult> => {
  const resolver = await fetchEnsResolver({ name: value, chainId: 1 })
  return resolver
}

export const getUserOnboardingStep = (
  hasFundedWallet: boolean,
  hasDeployedStrategy: boolean
) => {
  if (hasFundedWallet && hasDeployedStrategy) return 3
  if (hasFundedWallet) return 2
  return 1
}

export const getFormattedDateAndTime = (date: Date) => {
  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })

  return { formattedDate, formattedTime }
}

export const isNotZero = (value: string) => {
  const trimmedValue = value.trim()
  // Check if the string is empty or contains only zeros or decimal points
  const regex = /^0*\.?0*$/
  return !regex.test(trimmedValue)
}

export const getAssetWithBiggestValue = (items: TAsset[]): TAsset | null => {
  let maxItem: TAsset | null = null
  let maxValue = -Infinity

  for (const item of items) {
    const value = parseFloat(item.value)

    if (value > maxValue) {
      maxItem = item
      maxValue = value
    }
  }

  return maxItem
}

export const verifyMessage = async (
  message: string,
  address: Address,
  signature: string
) => {
  try {
    const signerAddr = await verifyMessageEthers(message, signature)
    if (signerAddr !== address) {
      return false
    }
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export const sortByName = (a: any, b: any) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()

  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  return 0
}

export const isValidUsername = (username: string) => {
  const regex = /^[a-z0-9_]{5,12}$/i
  return regex.test(username)
}
