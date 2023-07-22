import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1.5rem;
  height: 7rem;
  width: 100%;
  overflow: hidden;
`

export const ProgressBarContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.gray800};
    min-height: 1px;
    width: 100%;
  `}
`

export const PercentageTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 3.1rem;
`
