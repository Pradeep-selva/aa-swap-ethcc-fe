import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Arrows, ListItem, StrategiesIcon } from '@/features/shared'

export default {
  title: '_base/ListItem',
  component: ListItem
} as Meta

type Story = StoryObj<typeof ListItem>

export const Component: Story = {
  args: {
    title: 'List Item 1'
  }
}

export const WithStrategyIcon: Story = {
  args: {
    title: 'List Item with Icon',
    strategyIcon: <StrategiesIcon />
  }
}

export const WithStrategyAndActionIcon: Story = {
  args: {
    title: 'List Item with Icon',
    strategyIcon: <StrategiesIcon />,
    actionIcon: <Arrows />
  }
}

export const WithStrategyAndActionIconAndSecondaryInfo: Story = {
  args: {
    title: 'List Item with Icon',
    strategyIcon: <StrategiesIcon />,
    actionIcon: <Arrows />,
    secondaryInfo: 'Seconday Info'
  }
}
