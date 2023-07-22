import styled, { css } from 'styled-components'

export const TagComponentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    align-items: center;
    background-color: ${theme.colors.gray700};
    width: fit-content;
    height: 2.4rem;
    padding: 0rem 0.6rem 0 0.4rem;
    border-radius: 2rem;
    color: ${theme.colors.gray200};
    transition: background-color 300ms ease-out;
    white-space: nowrap;

    &:hover {
      background-color: ${theme.colors.gray600};
    }
  `}
`

export const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`
