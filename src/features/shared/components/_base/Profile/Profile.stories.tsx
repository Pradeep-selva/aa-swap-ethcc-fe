import { Meta, StoryObj } from '@storybook/react'
import { Profile, Eth, Account } from '@/features/shared'

export default {
  title: '_Base/Profile',
  component: Profile
} as Meta

type Story = StoryObj<typeof Profile>

export const Component: Story = {
  args: {
    name: '0xe2C5ecA82815B694A07d09E795fCefA9D62085AF',
    avatar: <Account height={18} width={18} />
  }
}
