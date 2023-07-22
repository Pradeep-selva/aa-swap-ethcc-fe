import styled, { css } from 'styled-components'

export const StyledInformationBar = styled.div<{ borderRadius: number }>`
  ${({ theme, borderRadius }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray700};
    gap: 0.9rem;
    padding: 1.2rem;
    border-radius: ${borderRadius}rem;
    width: 100%;
  `}
`
