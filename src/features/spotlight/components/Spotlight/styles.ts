import { customMedia } from '@/lib/styledComponents'
import styled, { css } from 'styled-components'

export const SpotlightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    align-items: center;
    padding: 0.4rem;
    /* background: ${theme.colors.gray800}; */
    border-radius: 1.2rem;
    width: 24rem;

    ${customMedia.lessThan('large')`
        width: 100%;
        padding: 0;
    `}
  `}
`

export const SpotlightModalWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray600};
    width: 54.4rem;
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.8rem;
    overflow: hidden;
    z-index: 1;
    background-color: ${theme.colors.gray600};
  `}
`

export const NotSelectedAssetWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 5.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 1.2rem;
    background: ${theme.colors.gray700};
    border-radius: 0.8rem;
  `}
`
