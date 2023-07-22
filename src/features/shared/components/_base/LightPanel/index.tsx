import React from 'react'
import styled, { css } from 'styled-components'
import FlexContainer from '../../_wrappers/FlexContainer'
import { ChevronIcon } from '../../icons'
import CloseButtonBox from '../CloseButtonBox'
import Typography from '../Typography'
import { useThemeContext } from '@/hooks/themeProvider'
import { TAsset } from '@/features/console'
import TagComponent from '../TagComponent'
import InputAssetSelector from '@/features/spotlight/components/InputAssetSelector'

type LightPanelProps = {
  children: React.ReactNode
}

const LightPanelWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.gray700};
  `}
`

export default function LightPanel({ children }: LightPanelProps) {
  return <LightPanelWrapper>{children}</LightPanelWrapper>
}

// const SLightPanelHeader = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 2rem 1.6rem;

//     div {
//       &:hover {
//         svg {
//           fill: ${theme.colors.gray400};
//         }
//       }

//       svg {
//         fill: ${theme.colors.gray500};
//       }
//     }
//   `}
// `

// type LightPanelHeaderProps = {
//   title: string
//   showBackButton?: boolean
//   selectedAsset?: TAsset | null
//   handleBackButton?: () => void
//   onCloseAssetSelector?: () => void
//   backButtonIcon?: React.ReactNode
// }

// export function LightPanelHeader({
//   title,
//   handleBackButton,
//   onCloseAssetSelector,
//   showBackButton = true,
//   backButtonIcon = <ChevronIcon />,
//   selectedAsset = null
// }: LightPanelHeaderProps) {
//   const { theme } = useThemeContext()
//   return (
//     <SLightPanelHeader>
//       <FlexContainer gap={1.6} alignItems="center">
//         {!!showBackButton && handleBackButton && (
//           <CloseButtonBox
//             closeButtonClick={handleBackButton}
//             icon={backButtonIcon}
//           />
//         )}
//         <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
//           {title}
//         </Typography>
//       </FlexContainer>
//       {selectedAsset && (
//         <FlexContainer alignItems="center" gap={0.8} justifyContent="flex-end">
//           <InputAssetSelector
//             type="dropdown"
//             selectedAsset={selectedAsset}
//             availableAssets={[]}
//           />
//           <TagComponent
//             text={selectedAsset.name.toUpperCase()}
//             icon={selectedAsset.logo}
//             onClose={onCloseAssetSelector && onCloseAssetSelector}
//           />
//         </FlexContainer>
//       )}
//     </SLightPanelHeader>
//   )
// }
