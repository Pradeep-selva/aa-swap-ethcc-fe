import { Meta, StoryObj } from '@storybook/react'
import {
  DelayedLottiesLoading,
  WalletItemLeft,
  WalletItemRight,
  WalletItemMid
} from '@/features/shared'

export default {
  title: '_loadingSkeleton/DelayedLottiesLoading',
  component: DelayedLottiesLoading
} as Meta

type Story = StoryObj<typeof DelayedLottiesLoading>

export const Component: Story = {
  args: { lotties: [WalletItemLeft, WalletItemRight, WalletItemMid] }
}
