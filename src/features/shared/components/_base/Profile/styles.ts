import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 1.2rem;
    width: fit-content;
    height: 3.6rem;
    background-color: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.4rem;
    transition: border-color ${theme.transition.default};
    cursor: pointer;

    &:hover,
    &:active {
      border: 1px solid ${theme.colors.gray500};
    }
  `}
`
