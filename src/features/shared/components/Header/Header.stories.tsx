import { Meta, StoryObj } from '@storybook/react'
import { Header } from '@/features/shared'

export default {
  title: 'Header',
  component: Header
} as Meta

type Story = StoryObj<typeof Header>

export const Component: Story = {
  args: {}
}
