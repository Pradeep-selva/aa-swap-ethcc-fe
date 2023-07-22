import { Meta, StoryObj } from '@storybook/react'
import { CustomInput } from '@/features/shared'

export default {
  title: '_Base/CustomInput',
  component: CustomInput
} as Meta

type Story = StoryObj<typeof CustomInput>

export const Empty: Story = {
  args: {
    placeholder: 'Enter text here'
  }
}

export const WithPencilIcon: Story = {
  args: {
    placeholder: 'Enter text here',
    withPencilIcon: true
  }
}

export const WithValue: Story = {
  args: {
    value: 'Value'
  }
}
