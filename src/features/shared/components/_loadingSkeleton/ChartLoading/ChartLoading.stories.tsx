import { Meta, StoryObj } from '@storybook/react'
import { ChartLoading } from '@/features/shared'

export default {
  title: '_loadingSkeleton/ChartLoading',
  component: ChartLoading
} as Meta

type Story = StoryObj<typeof ChartLoading>

export const Component: Story = {
  args: {}
}
