import styled, { css } from 'styled-components'

type StyledLeftNeonLightWrapperProps = {
  bgColor: string
  wrapperHeight: number
}

export const StyledLeftNeonLightWrapper = styled.div<StyledLeftNeonLightWrapperProps>`
  ${({ theme, bgColor, wrapperHeight }) => css`
    position: relative;
    display: flex;
    height: ${`${wrapperHeight}rem`};
    padding: 0 1.6rem;
    align-items: center;
    background-color: ${bgColor};
    width: 100%;
  `}
`
