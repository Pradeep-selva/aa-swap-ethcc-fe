import { Meta, StoryObj } from '@storybook/react'
import { FeeModeSelector } from '@/features/shared'

export default {
  title: '_Base/FeeModeSelector',
  component: FeeModeSelector
} as Meta

type Story = StoryObj<typeof FeeModeSelector>

export const Component: Story = {
  args: {
    mode: 'normal',
    gwei: 67
  }
}
