import { Meta, StoryObj } from '@storybook/react'
import { SubAccountSelector } from '@/features/shared'
import { Address } from '../../../types'

export default {
  title: '_Base/SubAccountSelector',
  component: SubAccountSelector
} as Meta

type Story = StoryObj<typeof SubAccountSelector>

const address: Address = '0xe2C5ecA82815B694A07d09E795fCefA9D62085AF'

export const Component: Story = {
  args: {
    account: address
  }
}
