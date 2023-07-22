import { Meta, StoryObj } from '@storybook/react'
import { OnboardingHint } from '@/features/shared'

export default {
  title: '_Base/OnboardingHint',
  component: OnboardingHint
} as Meta

type Story = StoryObj<typeof OnboardingHint>

export const Component: Story = {
  args: {
    title: 'Try DCA automation',
    subtitle:
      'Use “Home” to track capital efficiency, positions metrics and apply actions.',
    hintChips: [
      { title: 'Buy', darkAccent: true },
      { title: 'ETH' },
      { title: 'every 14 days ' }
    ]
  }
}
