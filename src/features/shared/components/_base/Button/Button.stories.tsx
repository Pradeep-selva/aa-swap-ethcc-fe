import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/features/shared'

export default {
  title: '_Base/Button',
  component: Button
} as Meta

type Story = StoryObj<typeof Button>

export const Buttons: Story = {
  args: {
    children: 'Button',
    buttonType: 'primary'
  }
}
