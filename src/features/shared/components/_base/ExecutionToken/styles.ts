import styled, { css } from 'styled-components'

export const StyledExecutionToken = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.8rem;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    transition: border-color ${theme.transition.default};

    &:hover {
      border: 1px solid ${theme.colors.gray500};
    }
  `}
`

export const TokenImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    background-color: ${theme.colors.gray700};
  `}
`
