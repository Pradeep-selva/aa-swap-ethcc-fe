import styled, { css } from 'styled-components'
import { customMedia } from '@/lib/styledComponents'

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #090f21;
  position: relative;
  overflow-x: hidden;

  ${customMedia.lessThan('small')`
    align-items:center;
  `}
`

export const MobileTransactionBuilderWrapper = styled.div`
  display: none;

  ${customMedia.lessThan('small')`
     display:flex;
     width:90%;
     justify-content:flex-end;
     align-items:center;
     cursor:pointer;
     padding-top:8.4rem;
  `}
`

export const MobileTxnBuilderBody = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    padding: 2.4rem 1.6rem;
    background-color: ${theme.colors.mainBg};
  `}
`

export const LayoutBody = styled.div`
  display: flex;
  min-height: calc(100% - 7rem);
  justify-content: center;
  width: 100%;
  padding-top: 6.4rem;
  ${customMedia.lessThan('small')`
    width:90%;
  `}
`

export const MiddleContentFlexWrapper = styled.div`
  display: flex;

  ${customMedia.lessThan('small')`
     width:100%
  `}
`

export const MainComponentWrapper = styled.div<{ txnBuilderOpen: boolean }>`
  ${({ txnBuilderOpen }) => css`
    display: flex;
    flex: 1;
    padding: ${txnBuilderOpen ? '6.4rem 3.7rem 6.4rem 3rem' : '6.4rem'};
    justify-content: center;

    ${customMedia.lessThan('large')`
      padding: ${txnBuilderOpen ? '6.4rem 2rem' : '6.4rem'};
   `}

    ${customMedia.lessThan('medium')`
      padding: 6.4rem 1.4rem;
   `}

    ${customMedia.lessThan('small')`
      padding: 6.4rem 0rem;
      width:100%
  `}
  `}
`

export const MainComponentContainer = styled.div`
  ${({ theme }) => css`
    width: 68rem;
    transition: width ${theme.transition.default};

    ${customMedia.lessThan('huge')`
        width: 55rem;
    `}

    ${customMedia.lessThan('medium')`
        width: 43.4rem;
    `}

    ${customMedia.lessThan('small')`
       width: 100%;
    `}
  `}
`

export const RightSideMockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 3rem 6.4rem 1.6rem;
  row-gap: 6.4rem;
  max-width: 32.7rem;
  width: 100%;

  ${customMedia.lessThan('small')`
    display:none
  `}
`

// export const TxnBuilderMockWrapper = styled.div<{ isOpen: boolean }>`
//   display: flex;
//   flex-direction: column;
//   padding: ${(props) => (props.isOpen ? '2.8rem 1.6rem' : '0')};
//   width: ${(props) => (props.isOpen ? '25rem' : '6rem')};
//   border: ${(props) => (props.isOpen ? '1px solid red' : '0')};
//   transition: all 0.25s linear;
// `

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  padding: 0rem 0 3.4rem 0;
`

export const ActionBuilderLoadingSkeleton = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray700};
    border-radius: 1.2rem;
    border: 4px solid ${theme.colors.gray800};
    width: 28rem;
    height: 6.8rem;
    display: block;
  `}
`

export const FixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 20;
`

export const ReleasePanelModal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0rem;
    left: auto;
    right: auto;
    width: 100%;
    height: fit-content;
    z-index: ${theme.layers.base};
    background-color: ${theme.colors.mainBg};
  `}
`
