import { Meta, StoryObj } from '@storybook/react'
import { Tabs, Typography } from '@/features/shared'

export default {
  title: '_Wrappers/Tabs',
  component: Tabs
} as Meta

type Story = StoryObj<typeof Tabs>

export const Component: Story = {
  args: {
    tabsTitle: [
      { title: 'Tab 1', tooltip: true },
      { title: 'Tab 2' },
      { title: 'Tab 3' }
    ],
    children: [
      <Typography key={1} type="BODY_M">
        Children 1
      </Typography>,
      <Typography key={2} type="BODY_M">
        Children 2
      </Typography>,
      <Typography key={3} type="BODY_M">
        Children 3
      </Typography>
    ]
  }
}
