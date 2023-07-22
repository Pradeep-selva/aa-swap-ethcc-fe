import styled, { css } from 'styled-components'

export const StyledClosableModalWrapper = styled.div<{ width: number }>`
  ${({ theme, width }) => css`
    position: relative;
    background-color: ${theme.colors.gray800};
    width: ${width}rem;
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.4rem;
  `}
`
