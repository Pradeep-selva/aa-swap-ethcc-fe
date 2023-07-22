import * as Icons from '.'
import { Meta } from '@storybook/react'
import { Typography, FlexContainer, HrLine } from '@/features/shared'

const IconStories = Object.fromEntries(
  Object.entries(Icons) as Array<
    [keyof typeof Icons, React.FC<Icons.IconProps>]
  >
)

export default {
  title: '_icons/Icons',
  component: undefined
} as Meta

export const AllIcons = () => (
  <>
    {Object.entries(IconStories).map(([name, Icon], idx) => (
      <FlexContainer flexDirection="column" key={name}>
        <FlexContainer padding="3rem 0" gap={4}>
          <Typography type="TITLE_M">
            {idx + 1}) {name}
          </Typography>
          <Icon width={30} height={30} color="white" />
        </FlexContainer>
        <HrLine paddingX={0} color="gray" />
      </FlexContainer>
    ))}
  </>
)
