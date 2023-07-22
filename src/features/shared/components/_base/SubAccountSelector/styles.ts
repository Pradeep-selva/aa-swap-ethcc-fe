import styled from 'styled-components'

import { fadeInFromLeft } from '../../../styles'

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.2rem 0.6rem;
  gap: 7.3rem;

  :not(div > svg) {
    ${fadeInFromLeft(0.35)};
  }

  svg {
    min-width: 2rem;
  }

  p {
    ${fadeInFromLeft(0.35)};
  }
`
