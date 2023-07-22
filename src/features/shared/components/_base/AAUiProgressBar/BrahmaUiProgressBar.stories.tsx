import { Meta, StoryObj } from '@storybook/react'
import { AAUiProgressBar } from '@/features/shared'

export default {
  title: '_Base/AAUiProgressBar',
  component: AAUiProgressBar
} as Meta

type Story = StoryObj<typeof AAUiProgressBar>

export const Component: Story = {
  args: {
    value: 30,
    color: 'red',
    height: 1
  }
}
