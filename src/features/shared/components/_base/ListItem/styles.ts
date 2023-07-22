import styled, { css } from 'styled-components'

import Typography from '@/features/shared/components/_base/Typography/index'

export const StyledTypography = styled(Typography)`
  color: inherit;
`

export const ListItemWrapper = styled.div<{ color?: 'primary' }>`
  ${({ theme, color = 'console2' }) => css`
    height: 5.2rem;
    width: 100%;
    padding: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
    background-color: ${theme.colors.gray800};
    transition: background-color ${theme.transition.default};

    > div {
      color: ${theme.colors.gray400};

      p {
        color: inherit;
      }
    }

    &:hover {
      background-color: ${`${theme.colors.gray800}A3`};

      > div {
        color: ${theme.colors.gray300};
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

export const ColorStrip = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 0.2rem;
    height: 5.2rem;
    top: 0;
    left: 0;
    transition: background ${theme.transition.default},
      box-shadow ${theme.transition.default};
    background: ${theme.colors.gray700};
  `}
`

export const ListItemLeftSide = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
`

export const ListItemRightSide = styled.div`
  display: flex;
`
