import styled, { css } from 'styled-components'

export const AccountNameStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-color: ${theme.colors.gray800};
    padding: 2.4rem 1.6rem;
    gap: 1.6rem;
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray900};
    padding: 2.4rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.2rem;
  `}
`

export const ValidationRules = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    padding: 1.2rem;
    border-radius: 0.4rem;

    span {
      background-color: ${theme.colors.gray800};
      border-radius: 0.4rem;
      padding: 0.2rem 0.4rem;
    }
  `}
`
