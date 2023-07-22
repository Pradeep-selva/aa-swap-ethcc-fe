import React, { useState } from 'react'
import Typography from '../../_base/Typography'
import TooltipBox from '../../_base/TooltipBox'

import * as S from './styles'

export type TTabSize = 'M' | 'S'

type TabTitle = {
  title: string
  tooltip?: React.ReactNode
}

export type TabsProps = {
  tabsTitle: TabTitle[]
  children: JSX.Element[]
  initialActiveTab?: number
  color?: string
  size?: TTabSize
  extendBottomLine?: boolean
}

export default function Tabs({
  tabsTitle,
  children,
  initialActiveTab = 0,
  color = 'console2',
  size = 'S',
  extendBottomLine = true
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (initialActiveTab > tabsTitle.length - 1) return 0
    return initialActiveTab
  })

  const handleTabTitleClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <S.Wrapper>
      <S.TitlesWrapper
        color={color}
        activeTab={activeTab}
        size={size}
        tabsLength={tabsTitle.length}
      >
        {tabsTitle.map((tab, index) => (
          <S.Title
            key={tab.title}
            color={color}
            size={size}
            active={activeTab === index}
            onClick={() => handleTabTitleClick(index)}
            extendBottomLine={extendBottomLine}
          >
            <Typography type="TITLE_XS" shouldInheritColor>
              {tab.title}
            </Typography>
            {!!tab.tooltip && (
              <TooltipBox
                content={<Typography type="BODY_XS">{tab.tooltip}</Typography>}
              />
            )}
          </S.Title>
        ))}
      </S.TitlesWrapper>
      <S.BodyWrapper extendBottomLine={extendBottomLine}>
        {children.map((child, index) => {
          return activeTab === index && <S.Body key={index}>{child}</S.Body>
        })}
      </S.BodyWrapper>
    </S.Wrapper>
  )
}
