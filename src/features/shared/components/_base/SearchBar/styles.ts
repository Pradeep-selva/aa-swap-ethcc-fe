import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    height: 6.4rem;
    width: 100%;
    padding: 2rem 1.6rem;
    gap: 8px;
    background: ${theme.colors.gray800};
    overflow: hidden;

    &:hover {
      span {
        background: ${theme.colors.console2};
        box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
        -webkit-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
        -moz-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
      }
    }
  `}
`

type ColorStripProps = {
  focused: boolean
}

export const ColorStrip = styled.span<ColorStripProps>`
  ${({ theme, focused }) => css`
    position: absolute;
    width: 0.2rem;
    height: 6.4rem;
    top: 0;
    left: 0;
    transition: background 125ms ease-out, box-shadow 125ms ease-out;
    background: ${theme.colors.gray800};

    ${focused &&
    css`
      background: ${theme.colors.console2};
      box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
      -webkit-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
      -moz-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors.console2}66`};
      background: ${theme.colors.console2};
    `}
  `}
`

export const SearchWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const StyledInput = styled.input`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    background: none;
    border: none;
    width: 100%;
    height: 6.4rem;
    transition: color 125ms ease-out;

    &:hover {
      &::placeholder {
        color: ${theme.colors.gray300};
      }
    }

    &:focus {
      outline: none;
    }
  `}
`

export const SelectedAssetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const CrossIconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray700};
    border-radius: 0.4rem;
    height: 2.4rem;
    width: 2.5rem;
  `}
`
