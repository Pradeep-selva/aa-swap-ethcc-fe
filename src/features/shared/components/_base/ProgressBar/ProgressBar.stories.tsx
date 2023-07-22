import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '@/features/shared'

export default {
  title: '_Base/ProgressBar',
  component: ProgressBar
} as Meta

type Story = StoryObj<typeof ProgressBar>

export const Component: Story = {
  args: {
    percentage: 69
  }
}

export const WithPercentageBar: Story = {
  args: {
    showPercentage: true,
    percentage: 69
  }
}
