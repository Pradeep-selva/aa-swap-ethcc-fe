import styled, { css } from 'styled-components'
import { FlexContainer, opacityIn } from '@/features/shared'

export const SwapItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.gray900};
    padding: 0.4rem;
    border-radius: 0.4rem;
  `}
`

export const SwapItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    cursor: pointer;
    display: flex;
    background: ${selected ? theme.colors.gray700 : 'transparent'};
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1.2rem;
    border-radius: 0.3rem;
    column-gap: 0.4rem;

    p {
      color: ${selected ? theme.colors.gray200 : theme.colors.gray600};
    }

    &:hover {
      background: ${theme.colors.gray800};
      p {
        color: ${theme.colors.gray400};
      }
    }
  `}
`

export const CustomSwapInput = styled.input`
  border: none;
  background-color: transparent;
  width: 4.2rem;

  &:focus {
    outline: none;
  }
`

export const DCAWrapper = styled.div`
  ${opacityIn(0.5)};
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 3.2rem;
`

export const DCAPanelHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem;

    div {
      &:hover {
        svg {
          fill: ${theme.colors.gray400};
        }
      }

      svg {
        fill: ${theme.colors.gray500};
      }
    }
  `}
`

export const GrayBGDiv = styled.div<{ margin: string; borderRadius: string }>`
  ${({ theme, margin, borderRadius }) => css`
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
    background: ${theme.colors.gray700};
    padding: 1.2rem;
    margin: ${margin};
    border-radius: ${borderRadius};
  `}
`

export const DCASwap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem;
  row-gap: 0.8rem;
`

export const SellReceiveWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.gray700};
    column-gap: 1px;
  `}
`

export const SellReceiveItem = styled(FlexContainer)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray800};
  `}
`
