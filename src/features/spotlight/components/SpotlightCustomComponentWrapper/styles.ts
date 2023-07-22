import styled, { css } from 'styled-components'

export const SpotlightModalWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray800};
    width: 54.4rem;
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.8rem;
    overflow: hidden;
    z-index: 1;
    display: flex;
    flex-direction: column;
  `}
`

export const SpotlightModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem;
`
