import styled, { css } from 'styled-components'
import Typography from '../../_base/Typography'

export const ListViewWrapper = styled.div`
  ${({ theme, color = 'primary' }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
    border: ${theme.colors.gray700} 1px solid;
    background: ${theme.colors.gray800};
    width: 100%;
    /* padding-bottom: 6rem; */
  `}
`

export const ColorStrip = styled.span<{ size: 'S' | 'M' }>`
  ${({ theme, size }) => css`
    position: absolute;
    width: 0.2rem;
    height: ${size === 'S' ? '5.7rem' : '9rem'};
    top: 0.3rem;
    left: 0;
    border-radius: 1rem 1rem 0 0;
    transition: background 125ms ease-out, box-shadow 125ms ease-out;
    background: transparent;

    &:hover {
      background: ${theme.colors.gray700};
    }
  `}
`

export const ListViewTitleWrapper = styled.div`
  ${({ theme, color = 'primary' }) => css`
    display: flex;
    column-gap: 0.8rem;
    align-items: center;
    padding: 2rem 1.6rem;
    border-top-left-radius: 0.8rem;
    height: 6rem;

    svg {
      margin-top: 0.3rem;
      fill: ${theme.colors.gray500};
    }

    p {
      color: ${theme.colors.gray500};
    }

    &:hover {
      p {
        color: ${theme.colors.gray300};
      }
    }
  `}
`

export const ListViewTitle = styled(Typography)`
  color: inherit;
`

export const ListViewItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListViewSubtitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 3.2rem;
    padding: 0.8rem 2rem;
    background: ${theme.colors.gray900};
  `}
`

export const ListViewItemWrapper = styled.div<{
  size: 'S' | 'M'
  color?: string
  isLastItem?: boolean
}>`
  ${({ theme, size, isLastItem = false, color = 'primary' }) => css`
    display: flex;
    align-items: center;
    padding: 1.8rem;
    column-gap: 1rem;
    height: ${size === 'S' ? '5.4rem' : '8.8rem'};
    overflow: hidden;
    cursor: pointer;
    position: relative;
    border-radius: ${isLastItem && '0 0 0.8rem 0.8rem'};

    p {
      transition: color ${theme.transition.default};
    }

    svg {
      fill: ${theme.colors.gray400};
    }

    &:hover {
      p {
        color: ${theme.colors.white};
      }
      span {
        background: ${theme.colors[color]};
        box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
        -webkit-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
        -moz-box-shadow: ${`2px 0px 5px 0.5px ${theme.colors[color]}66`};
      }
    }
  `}
`

export const ListViewItemBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.6rem 2rem;
    background: ${theme.colors.gray800};
    border-radius: 0 0 0.8rem 0.8rem;
  `}
`
export const ItemsSubtitleHighlight = styled.div<{
  itemsSubtitleHighlight: boolean
}>`
  ${({ theme, itemsSubtitleHighlight }) => css`
    ${itemsSubtitleHighlight &&
    css`
      background-color: ${theme.colors.gray700};
      border-radius: 0.4rem;
      padding: 0.2rem 0.4rem;
    `}
  `}
`
