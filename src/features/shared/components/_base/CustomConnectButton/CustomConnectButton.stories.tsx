import { Meta, StoryObj } from '@storybook/react'
import { CustomConnectButton } from '@/features/shared'

export default {
  title: '_Base/CustomConnectButton',
  component: CustomConnectButton
} as Meta

type Story = StoryObj<typeof CustomConnectButton>

export const Empty: Story = {
  args: {}
}
