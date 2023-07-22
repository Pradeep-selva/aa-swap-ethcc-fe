import { Meta, StoryObj, Preview } from '@storybook/react'
import { TooltipBox, Typography } from '@/features/shared'

export default {
  title: '_Base/TooltipBox',
  component: TooltipBox
} as Meta

type Story = StoryObj<typeof TooltipBox>

export const ComponentTop: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    direction: 'top'
  },
  parameters: {
    layout: 'centered'
  }
}

export const ComponentRight: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    direction: 'right'
  },
  parameters: {
    layout: 'centered'
  }
}

export const ComponentBottom: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    direction: 'bottom'
  },
  parameters: {
    layout: 'centered'
  }
}

export const ComponentLeft: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    direction: 'left'
  },
  parameters: {
    layout: 'centered'
  }
}

export const ComponentCustom: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    top: 2,
    left: 2
  },
  parameters: {
    layout: 'centered'
  }
}

export const WithChildren: Story = {
  args: {
    content: <Typography type="BODY_M">This is tooltip</Typography>,
    children: <h3>Hello</h3>,
    top: 3
  },
  parameters: {
    layout: 'centered'
  }
}
