import styled, { css } from 'styled-components'

type GridItemProps = {
  isSelected: boolean
}

export const GridBox = styled.div<GridItemProps>`
  ${({ theme, isSelected }) => css`
    width: 13.2rem;
    text-transform: capitalize;
    height: 9.2rem;
    border-radius: 0.2rem;
    background: ${isSelected
      ? 'rgba(178, 248, 255, 0.08)'
      : theme.colors.gray800};
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border 300ms ease-out;
    border: ${isSelected
      ? `1px solid ${theme.colors.console2}`
      : `1px solid ${theme.colors.gray700}`};

    &:hover {
      border: ${!isSelected && `1px solid ${theme.colors.gray600}`};
      background: ${!isSelected && theme.colors.gray700};
    }
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  overflow: hidden;
`
