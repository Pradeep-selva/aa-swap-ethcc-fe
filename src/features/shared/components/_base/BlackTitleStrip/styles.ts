import styled, { css } from 'styled-components'

type MainWrapperProps = {
  paddingX: number
  paddingY: number
}

export const MainWrapper = styled.div<MainWrapperProps>`
  ${({ theme, paddingX, paddingY }) => css`
    background-color: ${theme.colors.gray900};
    width: 100%;
    padding: ${`${paddingY}rem`} ${`${paddingX}rem`};

    p {
      /* color: ${theme.colors.gray500}; */
      text-align: left;
    }
  `}
`
