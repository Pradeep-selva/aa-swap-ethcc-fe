import { Meta, StoryObj } from '@storybook/react'
import { HrLine } from '@/features/shared'

export default {
  title: '_Base/HrLine',
  component: HrLine
} as Meta

type Story = StoryObj<typeof HrLine>

export const Component: Story = {
  args: {
    color: 'red',
    paddingX: 1.2
  }
}
