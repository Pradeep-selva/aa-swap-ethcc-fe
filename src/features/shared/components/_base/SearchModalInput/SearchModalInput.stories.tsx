import { Meta, StoryObj } from '@storybook/react'
import { SearchModalInput } from '@/features/shared'

export default {
  title: '_Base/SearchModalInput',
  component: SearchModalInput
} as Meta

type Story = StoryObj<typeof SearchModalInput>

export const Component: Story = {
  args: {
    placeholder: 'Search Modal Input'
  }
}
