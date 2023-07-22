import { Meta, StoryObj } from '@storybook/react'
import { InfoLinkTag, ScatterPlotIcon, Verified } from '@/features/shared'

export default {
  title: '_Base/InfoLinkTag',
  component: InfoLinkTag
} as Meta

type Story = StoryObj<typeof InfoLinkTag>

export const InfoTag: Story = {
  args: {
    content: 'Uniswap',
    tagType: 'info',
    toolTipContent: 'content'
  }
}

export const InfoTagHighlighted: Story = {
  args: {
    content: 'Uniswap',
    tagType: 'info',
    highlighted: true,
    highlightIcon: <Verified />
  }
}

export const LinkTag: Story = {
  args: {
    content: 'Uniswap',
    tagType: 'link',
    link: '/'
  }
}

export const LinkTagHighlighted: Story = {
  args: {
    content: 'Uniswap',
    tagType: 'link',
    highlighted: true,
    highlightIcon: <ScatterPlotIcon />,
    link: '/'
  }
}
