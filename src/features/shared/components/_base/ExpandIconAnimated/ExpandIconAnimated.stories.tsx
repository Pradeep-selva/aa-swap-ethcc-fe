import { Meta, StoryObj } from '@storybook/react'
import { ExpandIconAnimated } from '@/features/shared'

export default {
  title: '_Base/ExpandIconAnimated',
  component: ExpandIconAnimated
} as Meta

type Story = StoryObj<typeof ExpandIconAnimated>

export const Component: Story = {
  args: {
    expanded: true
  }
}
