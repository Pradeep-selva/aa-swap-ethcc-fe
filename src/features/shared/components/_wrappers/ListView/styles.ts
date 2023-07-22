import styled, { css } from 'styled-components'

export const ListViewWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    border: ${theme.colors.gray700} 1px solid;
    background: ${theme.colors.gray800};
    width: 100%;
    /* padding-bottom: 6rem; */
  `}
`

export const ColorStrip = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 0.2rem;
    height: 5.7rem;
    top: 0.3rem;
    left: 0;
    border-radius: 1rem 1rem 0 0;
    transition: background 125ms ease-out, box-shadow 125ms ease-out;
    background: ${theme.colors.gray700};
  `}
`

export const ListViewTitle = styled.div`
  ${({ theme, color = 'primary' }) => css`
    display: flex;
    align-items: center;
    height: 6rem;
    padding: 2rem 1.6rem;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 0.8rem;
    column-gap: 1rem;

    svg {
      fill: ${theme.colors.gray300};
    }

    span {
      background: ${theme.colors[color]};
      box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
      -webkit-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
      -moz-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
    }
  `}
`

export const ListViewItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListViewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListViewItemTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 3.2rem;
    padding: 0.8rem 2rem;
    background: ${theme.colors.gray900};
  `}
`

export const ListViewItemBody = styled.div<{ itemsPadding: string }>`
  ${({ theme, itemsPadding }) => css`
    display: flex;
    padding: ${itemsPadding};
    background: ${theme.colors.gray800};
    border-radius: 0 0 0.8rem 0.8rem;
  `}
`
