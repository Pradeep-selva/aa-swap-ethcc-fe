import { Meta, StoryObj } from '@storybook/react'
import { Tile } from '@/features/shared'

export default {
  title: '_Base/Tile',
  component: Tile
} as Meta

type Story = StoryObj<typeof Tile>

export const Component: Story = {
  args: {
    name: 'Tile',
    icon: ''
  }
}

export const IsSelected: Story = {
  args: {
    name: 'Tile',
    icon: '',
    isSelected: true
  }
}
