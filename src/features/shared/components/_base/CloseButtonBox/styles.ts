import styled, { css } from 'styled-components'

export const StyledCloseButtonBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray700};
    border-radius: 0.4rem;
    height: 2.4rem;
    width: 2.5rem;
    cursor: pointer;
  `}
`
