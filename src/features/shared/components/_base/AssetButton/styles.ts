import styled, { css } from 'styled-components'
import { AssetButtonTypeProps } from '.'
import { Theme } from '@/lib/styledComponents'

type StyledButtonProps = {
  buttonType: AssetButtonTypeProps
}

const selectStyle: { [key in AssetButtonTypeProps]: any } = {
  action: (theme: Theme) => css`
    background: ${`${theme.colors.console2}0A`};
    border: 1px solid ${theme.colors.console2};
    color: ${theme.colors.console2};
    width: fit-content;

    &:hover:enabled {
      background: ${`${theme.colors.console2}29`};
      border: 1px solid ${theme.colors.console2};
    }
  `,

  asset: (theme: Theme) => css`
    width: fit-content;
    background: ${theme.colors.gray700};
    border: 1px solid ${theme.colors.gray600};
    color: ${theme.colors.gray200};

    &:hover:enabled {
      border: 1px solid ${theme.colors.gray400};
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, buttonType }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 0.4rem;
    height: 3.2rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    cursor: pointer;
    transition: border 0.1s linear, background 0.1s linear;

    ${buttonType && selectStyle[buttonType](theme)};
  `}
`
