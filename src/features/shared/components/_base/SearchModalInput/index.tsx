import { useState, InputHTMLAttributes } from 'react'
import { Search } from '../../icons'

import * as S from './style'

type SearchModalInputProps = InputHTMLAttributes<HTMLInputElement>

export default function SearchModalInput({ ...props }: SearchModalInputProps) {
  const [focused, setFocused] = useState(false)

  const setToFocused = () => {
    setFocused(true)
  }

  const setToUnfocused = () => {
    setFocused(false)
  }

  return (
    <S.MainWrapper focused={focused}>
      {<Search height={20} width={20} />}
      <S.StyledInput
        onFocus={setToFocused}
        onBlur={setToUnfocused}
        spellCheck={false}
        {...props}
      />
    </S.MainWrapper>
  )
}
