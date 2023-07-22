import {
  OpenInNewIcon,
  TooltipBox,
  Typography,
  openInNewTab
} from '@/features/shared'
import { useThemeContext } from '@/hooks/themeProvider'

import * as S from './styles'

type InfoLinkTagProps = {
  tagType: 'info' | 'link'
  content: string | React.ReactNode
  toolTipContent?: string
  link?: string
  highlighted?: boolean
  highlightIcon?: React.ReactNode
}

export default function InfoLinkTag({
  content,
  tagType,
  highlighted = false,
  link,
  highlightIcon,
  toolTipContent
}: InfoLinkTagProps) {
  const { theme } = useThemeContext()

  return (
    <S.StyledInfoLinkTag
      onClick={(e) => {
        if (!link) return
        e.stopPropagation()
        openInNewTab(link)
      }}
      highlighted={highlighted}
      style={{ cursor: `${link && 'pointer'}` }}
    >
      {highlightIcon && highlightIcon}
      {typeof content === 'string' ? (
        <Typography
          color={highlighted ? theme.colors.console2 : theme.colors.gray100}
          type="BODY_MEDIUM_XS"
        >
          {content}
        </Typography>
      ) : (
        content
      )}

      {tagType === 'info' && toolTipContent && (
        <TooltipBox
          top={3}
          content={<Typography type="BODY_XS">{toolTipContent}</Typography>}
        />
      )}
      {tagType === 'link' && link && (
        <OpenInNewIcon
          color={highlighted ? theme.colors.console2 : theme.colors.gray400}
        />
      )}
    </S.StyledInfoLinkTag>
  )
}
