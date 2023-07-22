import { Meta, StoryObj } from '@storybook/react'
import { Frax, ListViewAction, USDC } from '@/features/shared'

export default {
  title: '_Wrappers/ListViewAction',
  component: ListViewAction
} as Meta

type Story = StoryObj<typeof ListViewAction>

const items = [
  {
    icon: <Frax height={20} width={20} />,
    title: 'Title 1',
    subtitle: 'Subttile 1',
    onClick: () => ({})
  },
  {
    icon: <Frax height={20} width={20} />,
    title: 'Title 2',
    subtitle: 'Subttile 2',
    onClick: () => ({})
  }
]

export const Component: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: <USDC height={20} width={20} />,
    color: 'red',
    size: 'S'
  }
}

export const WithItems: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: <USDC height={20} width={20} />,
    color: 'red',
    size: 'S',
    items: items
  }
}
