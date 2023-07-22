import { InputHTMLAttributes, useState, useRef } from 'react'
import { EditPencilIcon } from '../../icons'

import * as S from './styles'

type CustomInputProps = {
  withPencilIcon?: boolean
  isInvalid?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export default function CustomInput({
  withPencilIcon,
  isInvalid,
  ...props
}: CustomInputProps) {
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const setToFocused = () => {
    setFocused(true)
  }

  const setToUnfocused = () => {
    setFocused(false)
  }

  return (
    <S.StyledCustomInputWrapper
      onClick={props.onClick && props.onClick}
      focused={focused}
      isInvalid={isInvalid}
    >
      <S.CustomStyledInput
        onFocus={setToFocused}
        onBlur={setToUnfocused}
        spellCheck={false}
        ref={inputRef}
        {...props}
      />
      {withPencilIcon && <EditPencilIcon />}
    </S.StyledCustomInputWrapper>
  )
}
