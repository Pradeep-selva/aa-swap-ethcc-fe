import React, { useEffect } from 'react'

import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClickOutside?: () => void
}

export default function Modal({
  children,
  isOpen,
  onClickOutside
}: ModalProps) {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = 'hidden'
  //   } else {
  //     document.body.style.overflowY = 'auto'
  //   }
  // }, [isOpen])

  return (
    <S.ModalWrapper
      isOpen={isOpen}
      onClick={() => {
        onClickOutside && onClickOutside()
      }}
    >
      <S.ModalContent
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  )
}
