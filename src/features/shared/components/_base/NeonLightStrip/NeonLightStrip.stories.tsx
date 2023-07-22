import { Meta, StoryObj } from '@storybook/react'
import { NeonLightStrip } from '@/features/shared'

export default {
  title: '_Base/NeonLightStrip',
  component: NeonLightStrip
} as Meta

type Story = StoryObj<typeof NeonLightStrip>

export const Component: Story = {
  args: {}
}
