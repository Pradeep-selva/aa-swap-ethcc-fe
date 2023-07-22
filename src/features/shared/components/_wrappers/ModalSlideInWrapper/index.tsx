import Modal from '../../_base/Modal'
import FlexContainer from '../FlexContainer'
import * as S from './styles'

export type ChildPositionProps = 'left' | 'right'

type ModalSlideInWrapperProps = {
  children: React.ReactNode
  open: boolean
  childPosition?: ChildPositionProps
  onClickOutside: () => void
}

// @TODO: make story for this
// @TODO: add sliding in animation

export default function ModalSlideInWrapper({
  children,
  open,
  onClickOutside,
  childPosition
}: ModalSlideInWrapperProps) {
  return (
    <Modal isOpen={open}>
      <S.StyledModalSlideInWrapper childPosition={childPosition}>
        <S.Content childPosition={childPosition} isOpen={open}>
          {children}
        </S.Content>
        <FlexContainer onClick={onClickOutside}></FlexContainer>
      </S.StyledModalSlideInWrapper>
    </Modal>
  )
}
