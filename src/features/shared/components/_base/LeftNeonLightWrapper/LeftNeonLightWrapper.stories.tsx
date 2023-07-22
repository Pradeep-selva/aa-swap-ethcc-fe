import { Meta, StoryObj } from '@storybook/react'
import { LeftNeonLightWrapper, USDC } from '@/features/shared'

export default {
  title: '_Base/LeftNeonLightWrapper',
  component: LeftNeonLightWrapper
} as Meta

type Story = StoryObj<typeof LeftNeonLightWrapper>

export const WithLeftTitle: Story = {
  args: {
    leftTitle: 'Left title'
  }
}

export const WithLeftTitleAndIcon: Story = {
  args: {
    leftTitle: 'Left title with icon',
    leftIcon: <USDC height={20} width={20} />
  }
}

export const WithRightTitle: Story = {
  args: {
    rightTitle: 'Right title'
  }
}

export const WithRightTitleAndIcon: Story = {
  args: {
    rightTitle: 'Right title with icon',
    rightIcon: <USDC height={20} width={20} />
  }
}
