import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.colors.gray700};
    transition: background-color ${theme.transition.default};
    height: 4.4rem;
    padding: 1rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.gray600};
    }
  `}
`
