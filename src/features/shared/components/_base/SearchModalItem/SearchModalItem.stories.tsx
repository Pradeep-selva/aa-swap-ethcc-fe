import { Meta, StoryObj } from '@storybook/react'
import { SearchModalItem, USDC } from '@/features/shared'

export default {
  title: '_Base/SearchModalItem',
  component: SearchModalItem
} as Meta

type Story = StoryObj<typeof SearchModalItem>

export const Component: Story = {
  args: {
    assetName: 'USDC',
    assetIcon: <USDC height={20} width={20} />,
    assetValue: '100'
  }
}

export const WithSubtitle: Story = {
  args: {
    assetName: 'USDC',
    assetIcon: <USDC height={20} width={20} />,
    assetValue: '100',
    assetSubtitle: 'Subtitle'
  }
}
