import styled, { css } from 'styled-components'

export const OnboardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 6.4rem);
    width: 100%;
    padding-top: 9.4rem;
    align-items: center;
    background: #090f21;
    padding-bottom: 6rem;
  `}
`

export const StepWrapper = styled.div`
  ${({ theme }) => css`
    width: 58rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
