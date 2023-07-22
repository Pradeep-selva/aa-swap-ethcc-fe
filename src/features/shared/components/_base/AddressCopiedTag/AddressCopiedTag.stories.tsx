import { Meta, StoryObj } from '@storybook/react'
import { AddressCopiedTag } from '@/features/shared'

export default {
  title: '_Base/AddressCopiedTag',
  component: AddressCopiedTag
} as Meta

type Story = StoryObj<typeof AddressCopiedTag>

export const AssetButtons: Story = {
  args: {
    text: 'Address copied'
  }
}
