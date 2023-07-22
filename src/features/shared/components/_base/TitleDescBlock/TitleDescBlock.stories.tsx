import { Meta, StoryObj } from '@storybook/react'
import { TitleDescBlock, USDC } from '@/features/shared'

export default {
  title: '_Base/TitleDescBlock',
  component: TitleDescBlock
} as Meta

type Story = StoryObj<typeof TitleDescBlock>

export const LeftTitle: Story = {
  args: {
    leftTitle: 'Left title'
  }
}

export const LeftTitleWithIcon: Story = {
  args: {
    leftTitle: 'Left title',
    leftIcon: <USDC height={20} width={20} />
  }
}

export const RightTitle: Story = {
  args: {
    rightTitle: 'Right title'
  }
}

export const RightTitleWithIcon: Story = {
  args: {
    rightTitle: 'Right title',
    rightIcon: <USDC height={20} width={20} />
  }
}
