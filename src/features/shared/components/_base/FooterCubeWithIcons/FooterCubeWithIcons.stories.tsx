import { Meta, StoryObj } from '@storybook/react'
import { FooterCubeWithIcons } from '@/features/shared'

export default {
  title: '_Base/FooterCubeWithIcons',
  component: FooterCubeWithIcons
} as Meta

type Story = StoryObj<typeof FooterCubeWithIcons>

export const Component: Story = {
  args: {
    accentColor: 'red'
  }
}

export const ComponentWithCube: Story = {
  args: {
    showCube: true,
    accentColor: 'red'
  }
}
