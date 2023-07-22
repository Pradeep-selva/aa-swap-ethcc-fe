import { Meta, StoryObj } from '@storybook/react'
import { Panel, USDC } from '@/features/shared'

export default {
  title: '_Wrappers/Panel',
  component: Panel
} as Meta

type Story = StoryObj<typeof Panel>

export const Component: Story = {
  args: {
    title: 'Title',
    children: <div>Children here</div>
  }
}

export const ComponentWithLeftIcon: Story = {
  args: {
    title: 'Title',
    leftIcon: <USDC width={20} height={20} />,
    children: <div>Children here</div>
  }
}
export const ComponentWithRightIcon: Story = {
  args: {
    title: 'Title',
    titleSlot: <USDC width={20} height={20} />,
    children: <div>Children here</div>
  }
}
