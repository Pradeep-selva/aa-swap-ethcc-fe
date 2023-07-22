import styled, { css } from 'styled-components'

export const StyledExpandIconAnimated = styled.div<{ expanded: boolean }>`
  ${({ theme, expanded }) => css`
    width: 4rem;
    display: flex;
    justify-content: center;
    cursor: pointer;

    svg {
      transition: transform 0.2s;
      margin-top: 0.2rem;
      fill: ${expanded ? theme.colors.gray500 : theme.colors.gray300};
      transform: ${expanded ? 'rotate(90deg)' : 'rotate(-90deg)'};
    }
  `}
`
