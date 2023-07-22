import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@/features/shared'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '_Base/Typography',
  component: Typography
} as Meta

type Story = StoryObj<typeof Typography>

// @TODO: Set this modal event based component

export const Component: Story = {
  args: {
    children: 'Hello',
    type: 'BODY_L'
  }
}
