import styled, { css } from 'styled-components'

type MainWrapperProps = {
  focused: boolean
}

export const MainWrapper = styled.div<MainWrapperProps>`
  ${({ theme, focused }) => css`
    width: 100%;
    height: 3.6rem;
    display: flex;
    gap: 1.3rem;
    padding: 0.8rem;
    align-items: center;
    background-color: ${theme.colors.gray700};
    border: 1px solid ${focused ? theme.colors.gray400 : theme.colors.gray600};
    border-radius: 0.4rem;
    transition: border-color ${theme.transition.default};

    &:hover {
      border: 1px solid ${theme.colors.gray400};
    }
  `}
`

export const StyledInput = styled.input`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    background: none;
    border: none;
    width: 100%;
    height: 3.6rem;
    transition: color ${theme.transition.default};

    &::placeholder {
      transition: color ${theme.transition.default};
      color: ${theme.colors.gray500};
    }

    &:hover {
      &::placeholder {
        color: ${theme.colors.gray400};
      }
    }

    &:focus {
      outline: none;
    }
  `}
`
