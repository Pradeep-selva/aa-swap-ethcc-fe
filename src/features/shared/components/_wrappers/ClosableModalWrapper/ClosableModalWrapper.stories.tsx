import { Meta, StoryObj } from '@storybook/react'
import {
  ClosableModalWrapper,
  FlexContainer,
  Typography
} from '@/features/shared'

export default {
  title: '_Wrappers/ClosableModalWrapper',
  component: ClosableModalWrapper
} as Meta

type Story = StoryObj<typeof ClosableModalWrapper>

export const Component: Story = {
  args: {
    title: (
      <Typography color="White" type="BODY_MEDIUM_S">
        Title
      </Typography>
    ),
    children: (
      <FlexContainer justifyContent="center" padding="2rem">
        <Typography color="White" type="BODY_MEDIUM_S">
          Children (no prestyling)
        </Typography>
      </FlexContainer>
    )
  }
}
