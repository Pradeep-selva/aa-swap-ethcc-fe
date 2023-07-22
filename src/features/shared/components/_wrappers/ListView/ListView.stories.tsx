import { Meta, StoryObj } from '@storybook/react'
import { ListView, Typography, USDC } from '@/features/shared'

export default {
  title: '_Wrappers/ListView',
  component: ListView
} as Meta

type Story = StoryObj<typeof ListView>

const items = [
  {
    title: 'Title',
    body: <Typography type="BODY_S">Body item</Typography>
  },
  {
    title: 'Title',
    body: <Typography type="BODY_S">Body item</Typography>
  }
]

export const Component: Story = {
  args: {
    title: 'Title',
    icon: <USDC height={20} width={20} />,
    items: items
  }
}
