import styled, { css } from 'styled-components'
import { opacityIn } from '@/features/shared'

export const StyledReleasePanels = styled.div`
  ${opacityIn(0.5)}
`

export const TitleWrapper = styled.div`
  width: 43.5rem;
  padding: 14.4rem 0 8rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4.8rem;

  p {
    width: 100%;
  }
`

export const TableWrapper = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.gray700};
    gap: 0;
    border-collapse: collapse;
  `}
`

export const TableData = styled.td`
  ${({ theme }) => css`
    position: relative;
    border: 1px solid ${theme.colors.gray700};
    padding: 2.4rem;
    width: 25%;
    vertical-align: top;
  `}
`

export const BlurWrapper = styled.div<{ blur: boolean }>`
  ${({ blur }) => css`
    ${blur &&
    css`
      filter: blur(5px);
    `};
  `}
`

export const SmallRectangle = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    top: 10.2rem;
    background-color: ${theme.colors.console2};
    width: 0.1rem;
    height: 1.6rem;
  `}
`
