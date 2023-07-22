import styled, { css } from 'styled-components'

export const StyledTableListWrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray700};
    background-color: ${theme.colors.gray800};
    border-radius: 8px;
    width: 100%;
  `}
`

export const ListView = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    height: 6rem;
    padding: 0 1.6rem;
    align-items: center;
    background-color: ${theme.colors.gray800};
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `}
`

export const ColorStrip = styled.span`
  ${({ theme, color = 'console2' }) => css`
    position: absolute;
    width: 0.2rem;
    height: 5.7rem;
    top: 0.3rem;
    left: 0;
    background: ${theme.colors[color]};
    box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
    -webkit-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
    -moz-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
  `}
`

export const BlackStripTableHead = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    background-color: ${theme.colors.gray900};
    height: 2.4rem;
    align-items: center;
    padding: 0 0.8rem;
  `}
`
