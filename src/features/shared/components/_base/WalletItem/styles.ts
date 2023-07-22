import styled, { css } from 'styled-components'

export const MainWrapper = styled.div<{ isLastItem?: boolean }>`
  ${({ theme, isLastItem = false }) => css`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    column-gap: 0.8rem;
    align-items: center;
    width: 100%;
    height: 6.2rem;
    background-color: ${theme.colors.gray800};
    padding: 1.2rem 1.6rem;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.gray200};
    transition: background-color 150ms ease-out;
    border-radius: ${isLastItem && '0 0 0.6rem 0.6rem'};

    &:hover {
      background-color: ${theme.colors.gray700};
      border-radius: ${isLastItem && '0 0 0.6rem 0.6rem'};
    }
  `}
`

export const AssetWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    text-align: end;
  }
`
