import styled, { css } from 'styled-components'

export const StyledCustomInputWrapper = styled.div<{
  focused: boolean
  isInvalid?: boolean
}>`
  ${({ theme, focused, isInvalid }) => css`
    display: flex;
    align-items: center;
    height: 4.4rem;
    background-color: ${theme.colors.black};
    border: 1px solid ${theme.colors.gray700};
    border-radius: 4px;
    transition: border-color ${theme.transition.default};
    padding: 1.2rem;
    width: 100%;

    ${focused &&
    css`
      border-color: ${isInvalid ? theme.colors.error : theme.colors.console2};
    `}
  `}
`

export const CustomStyledInput = styled.input`
  ${({ theme }) => css`
    height: 4.4rem;
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${theme.colors.gray300};
    transition: border-color 0.1s linear;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;

    &::placeholder {
      color: ${theme.colors.gray600};
    }

    &:hover,
    &:focus {
      outline: none;
    }
  `}
`
