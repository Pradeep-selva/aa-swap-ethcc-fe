import { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@/features/shared'

export default {
  title: '_Base/Modal',
  component: Modal
} as Meta

type Story = StoryObj<typeof Modal>

// @TODO: Set this modal event based component

export const IsOpen: Story = {
  args: {
    isOpen: true,
    children: <div>This is content</div>
  }
}
