import { Meta, StoryObj } from '@storybook/react'
import { Info, InformationBar } from '@/features/shared'

export default {
  title: '_Wrappers/InformationBar',
  component: InformationBar
} as Meta

type Story = StoryObj<typeof InformationBar>

export const Component: Story = {
  args: {
    children: 'This is information bar'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'This is information bar',
    icon: <Info />
  }
}
