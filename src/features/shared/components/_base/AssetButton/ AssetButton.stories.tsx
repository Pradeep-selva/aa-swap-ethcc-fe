import { Meta, StoryObj } from '@storybook/react'
import { AssetButton, USDC } from '@/features/shared'

export default {
  title: '_Base/AssetButton',
  component: AssetButton
} as Meta

type Story = StoryObj<typeof AssetButton>

export const ActionButtons: Story = {
  args: {
    text: 'Button',
    buttonType: 'action'
  }
}
export const ActionButtonsWithIcon: Story = {
  args: {
    text: 'Button',
    buttonType: 'action',
    icon: <USDC width={20} height={20} />
  }
}

export const AssetButtons: Story = {
  args: {
    text: 'Button',
    buttonType: 'asset'
  }
}
export const AssetButtonsWithIcon: Story = {
  args: {
    text: 'Button',
    buttonType: 'asset',
    icon: <USDC width={20} height={20} />
  }
}
