import styled, { css } from 'styled-components'

export const PanelWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.gray700};
    border-radius: 0.8rem;
    overflow: hidden;
    height: fit-content;
  `}
`

export const Header = styled.div`
  display: flex;
  background: #0d0d10;
  padding: 2rem 1.6rem;
  justify-content: space-between;
  align-items: center;
`

export const Body = styled.div<{
  padding: string
}>`
  ${({ theme, padding }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.gray800};
    padding: ${padding};
  `}
`
