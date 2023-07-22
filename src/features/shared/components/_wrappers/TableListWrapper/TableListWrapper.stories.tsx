import { Meta, StoryObj } from '@storybook/react'
import { TableListWrapper, Typography } from '@/features/shared'

export default {
  title: '_Wrappers/TableListWrapper',
  component: TableListWrapper
} as Meta

type Story = StoryObj<typeof TableListWrapper>

export const Component: Story = {
  args: {
    leftTitle: 'Left title',
    rightTitle: 'Right title',
    children: [
      <Typography key={1} type="BODY_M">
        Children 1
      </Typography>,
      <Typography key={2} type="BODY_M">
        Children 2
      </Typography>
    ]
  }
}
