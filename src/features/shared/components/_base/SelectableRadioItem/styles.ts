import styled, { css } from 'styled-components'
import { SelectableRadioItemProps } from '.'

type StyledSelectableRadioItemProps = {
  type: SelectableRadioItemProps['type']
  selected: boolean
}

export const StyledSelectableRadioItem = styled.div<StyledSelectableRadioItemProps>`
  ${({ theme, type, selected }) => css`
    display: flex;
    align-items: center;
    height: 5.2rem;
    width: 100%;
    transition: background-color ${theme.transition.default};
    border-radius: 0.4rem;
    padding: 0rem 1.6rem 0rem 0.9rem;
    gap: 1.3rem;
    cursor: pointer;

    ${type === 'primary' &&
    css`
      background-color: ${selected
        ? theme.colors.gray700
        : theme.colors.gray800};

      p {
        color: ${selected ? theme.colors.white : theme.colors.gray500};
        transition: color ${theme.transition.default};
      }

      &:hover {
        background-color: ${!selected && `${theme.colors.gray800}A3`};

        p {
          color: ${!selected && theme.colors.gray300};
        }

        ${RadioBox} {
          border-color: ${theme.colors.gray300};
        }
      }
    `}

    ${type === 'secondary' &&
    css`
      background-color: ${selected
        ? `${theme.colors.warning}1A`
        : `${theme.colors.warning}1A`};

      p {
        color: ${theme.colors.warning};
      }

      &:hover {
        background-color: ${`${theme.colors.warning}1A`};
      }
    `}
  `}
`

export const RadioBox = styled.div<StyledSelectableRadioItemProps>`
  ${({ theme, type, selected }) => css`
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.4rem;
    padding: 2px;
    transition: border ${theme.transition.default};

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      cursor: pointer;
      transform: scale(0);
    }

    ${type === 'primary' &&
    css`
      border: 1px solid
        ${selected ? theme.colors.console2 : theme.colors.gray500};

      &::after {
        background-color: ${theme.colors.console2};
      }
    `}

    ${type === 'secondary' &&
    css`
      border: 1px solid ${theme.colors.warning};

      &::after {
        background-color: ${theme.colors.warning};
      }
    `}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;
    &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
    }
  `}
`
