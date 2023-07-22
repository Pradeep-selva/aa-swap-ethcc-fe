import styled, { css } from 'styled-components'

type StyledFooterCubeWithIcons = {
  gap: number
}

export const StyledFooterCubeWithIcons = styled.div<StyledFooterCubeWithIcons>`
  ${({ theme, gap }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${`${gap}rem`};
    width: 100%;
  `}
`
