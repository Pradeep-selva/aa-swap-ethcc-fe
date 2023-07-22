import { Meta, StoryObj } from '@storybook/react'
import { TagComponent, USDC } from '@/features/shared'

export default {
  title: '_Base/TagComponent',
  component: TagComponent
} as Meta

type Story = StoryObj<typeof TagComponent>

export const Component: Story = {
  args: {
    text: 'Tag',
    icon: <USDC height={20} width={20} />
  }
}
