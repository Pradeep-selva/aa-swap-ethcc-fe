import { Meta, StoryObj } from '@storybook/react'
import { BlackTitleStrip, Typography } from '@/features/shared'

export default {
  title: '_Base/BlackTitleStrip',
  component: BlackTitleStrip
} as Meta

type Story = StoryObj<typeof BlackTitleStrip>

export const Component: Story = {
  args: {
    children: <Typography type="BODY_S">Black title strip</Typography>
  }
}
