import { Meta, StoryObj } from '@storybook/react'
import { AdjustIcon, SideNavItem } from '@/features/shared'

export default {
  title: '_Base/SideNavItem',
  component: SideNavItem
} as Meta

type Story = StoryObj<typeof SideNavItem>

export const Component: Story = {
  args: {
    text: 'Select',
    icon: <AdjustIcon />
  }
}

export const Selected: Story = {
  args: {
    text: 'Select',
    icon: <AdjustIcon />,
    isSelected: true
  }
}
