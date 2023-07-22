import { useState } from 'react'

import InfoLinkTag from '../InfoLinkTag'
import Typography from '../Typography'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

export default function SubsidyTag() {
  const { theme } = useThemeContext()
  const [showEaster, setShowEaster] = useState<boolean>(false)

  const showEasterHandler = async () => {
    setShowEaster(true)
    await new Promise((r) => setTimeout(r, 3000))
    setShowEaster(false)
  }

  return (
    <span style={{ position: 'relative' }} onClick={showEasterHandler}>
      <InfoLinkTag tagType="info" content="Subsidised" highlighted />
      {showEaster && (
        <S.EasterWrapper>
          <Typography color={theme.colors.gray100} type="BODY_MEDIUM_XS">
            Software is like sex: it&apos;s better when it&apos;s free
          </Typography>
        </S.EasterWrapper>
      )}
    </span>
  )
}
