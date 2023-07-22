import { Meta, StoryObj } from '@storybook/react'
import { GasSetting } from '@/features/shared'

export default {
  title: '_Base/GasSetting',
  component: GasSetting
} as Meta

type Story = StoryObj<typeof GasSetting>

export const Component: Story = {
  args: {
    text: 'Gas'
  }
}
