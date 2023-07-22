import styled, { css } from 'styled-components'

import { Theme } from '@/lib/styledComponents'
import { ButtonSize, ButtonTypeProp } from '.'

type StyledButtonProp = {
  buttonType: ButtonTypeProp
  buttonSize: ButtonSize
  removePadding?: boolean
}

const selectStyle: { [key in ButtonTypeProp | ButtonSize]: any } = {
  primary: (theme: Theme) => css`
    background: ${`${theme.colors.console2}14`};
    border: 1px solid ${theme.colors.console2};
    color: ${theme.colors.console2};

    &:hover {
      background: ${`${theme.colors.console2}2B`};
      border: 1px solid ${theme.colors.console2};
    }

    &:disabled {
      background: ${theme.colors.gray600};
      color: ${theme.colors.gray400};
      cursor: not-allowed;
      border: none;
    }
  `,

  secondary: (theme: Theme) => css`
    border: 1px solid ${theme.colors.gray700};
    color: ${theme.colors.gray400};
    background-color: transparent;

    &:hover {
      background: ${theme.colors.gray700};
      border: 1px solid ${theme.colors.gray600};
      color: ${theme.colors.gray300};
    }

    &:disabled {
      background: ${theme.colors.gray600};
      color: ${theme.colors.gray400};
      cursor: not-allowed;
      border: none;
    }
  `,

  warning: (theme: Theme) => css`
    background: ${theme.colors.warning}10;
    border: 1px solid ${theme.colors.warning};
    color: ${theme.colors.warning};

    &:hover {
      background: ${theme.colors.warning}30;
    }

    &:disabled {
      background: ${theme.colors.gray600};
      color: ${theme.colors.gray400};
      cursor: not-allowed;
      border: none;
    }
  `,

  danger: (theme: Theme) => css`
    background: ${theme.colors.error}10;
    border: 1px solid ${theme.colors.error};
    color: ${theme.colors.error};

    &:hover {
      background: ${theme.colors.error}30;
    }

    &:disabled {
      background: ${theme.colors.gray600};
      color: ${theme.colors.gray400};
      cursor: not-allowed;
      border: none;
    }
  `,

  M: (theme: Theme) => css`
    font-size: 1.4rem;
    border-radius: 0.8rem;
    padding: 0.4rem 4rem;
    height: 4.4rem;
    width: fit-content;
  `,

  S: (theme: Theme) => css`
    font-size: 1.2rem;
    border-radius: 0.4rem;
    height: 2rem;
    padding: 0.2rem 0.8rem;
    width: fit-content;
  `,

  L: (theme: Theme) => css`
    font-size: 1.4rem;
    border-radius: 0.8rem;
    padding: 0.4rem 4rem;
    height: 4.4rem;
    width: 100%;
  `
}

export const StyledButton = styled.button<StyledButtonProp>`
  ${({ theme, buttonType, buttonSize = 'M', removePadding = false }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    line-height: 2rem;
    cursor: pointer;
    transition: border 0.1s linear, background 0.1s linear;

    ${buttonSize && selectStyle[buttonSize](theme)};
    ${buttonType && selectStyle[buttonType](theme)};

    ${!!removePadding && 'padding: 0'};
  `}
`
