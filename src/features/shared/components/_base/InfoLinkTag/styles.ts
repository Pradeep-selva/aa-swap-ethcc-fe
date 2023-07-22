import styled, { css } from 'styled-components'

export const StyledInfoLinkTag = styled.div<{ highlighted: boolean }>`
  ${({ theme, highlighted }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${highlighted
      ? `${theme.colors.console2}1F`
      : theme.colors.gray700};
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
    width: fit-content;
    transition: background-color ${theme.transition.default};

    &:hover {
      background-color: ${highlighted
        ? `${theme.colors.console2}3D`
        : theme.colors.gray600};
    }

    svg {
      fill: ${highlighted ? theme.colors.console2 : theme.colors.gray400};
    }
  `}
`
