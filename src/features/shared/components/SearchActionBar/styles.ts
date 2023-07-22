import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray600};
    width: 90vw;
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.8rem;
    overflow: hidden;
    z-index: 1;
    background-color: ${theme.colors.gray600};
  `}
`

export const ActionsWrapper = styled.div``

export const NotFoundWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.gray800};
    padding: 1.6rem;

    p {
      color: ${theme.colors.gray200};
      text-align: left;
    }
  `}
`
