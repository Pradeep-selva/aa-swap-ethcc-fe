import { Meta, StoryObj } from '@storybook/react'
import { Eth, ExecutionToken } from '@/features/shared'

export default {
  title: '_Base/ExecutionToken',
  component: ExecutionToken
} as Meta

type Story = StoryObj<typeof ExecutionToken>

export const Component: Story = {
  args: {
    tokenIcon: <Eth />
  }
}
