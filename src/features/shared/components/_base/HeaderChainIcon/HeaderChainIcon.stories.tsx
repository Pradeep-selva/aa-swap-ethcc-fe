import { Meta, StoryObj } from '@storybook/react'
import { HeaderChainIcon } from '@/features/shared'

export default {
  title: '_Base/HeaderChainIcon',
  component: HeaderChainIcon
} as Meta

type Story = StoryObj<typeof HeaderChainIcon>

export const Component: Story = {
  args: {
    amount: '12.12'
  }
}
