import styled, { css } from 'styled-components'
import { Theme } from '@/lib/styledComponents'
import { FeeModesProps } from '.'

type StyledFeeModeSelectorProps = {
  mode: FeeModesProps
}

export const StyledFeeModeSelector = styled.div<StyledFeeModeSelectorProps>`
  ${({ theme, mode }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.4rem 0.6rem 0.4rem 1.8rem;
    height: 4rem;
    width: fit-content;
    border-radius: 0.8rem;
    transition: border-color ${theme.transition.default};
    cursor: pointer;

    ${mode === 'normal' &&
    css`
      background-color: ${theme.colors.gray800};
      border: 1px solid ${theme.colors.gray700};

      &:hover {
        border: 1px solid ${theme.colors.gray500};
      }
    `}

    ${mode === 'ape' &&
    css`
      background-color: ${`${theme.colors.warning}1A`};
      border: 1px solid ${theme.colors.warning};

      &:hover {
        border: 1px solid ${theme.colors.gray300};
      }
    `}
  `}
`

export const ModeSelect = styled.div<StyledFeeModeSelectorProps>`
  ${({ theme, mode }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    height: 2.4rem;
    width: 1.2rem;
    padding: 0.4rem 0.2rem;
    background-color: ${mode === 'normal'
      ? theme.colors.gray700
      : theme.colors.black};
    border-radius: 1.4rem;
  `}
`

type ModeProps = {
  mode: FeeModesProps | 'unselected'
}

const modeSelectStyle: { [key in ModeProps['mode']]: any } = {
  normal: (theme: Theme) => css`
    height: 0.8rem;
    width: 0.8rem;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.console2};
  `,

  ape: (theme: Theme) => css`
    height: 0.8rem;
    width: 0.8rem;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.warning};
  `,

  unselected: (theme: Theme) => css`
    height: 0.4rem;
    width: 0.4rem;
    background-color: ${theme.colors.gray300};
    border: 1px solid ${theme.colors.gray300};
  `
}

export const Mode = styled.div<ModeProps>`
  ${({ theme, mode }) => css`
    border-radius: 100%;
    transition: color ${theme.transition.default},
      height ${theme.transition.default}, width ${theme.transition.default};

    ${mode && modeSelectStyle[mode](theme)}
  `}
`
