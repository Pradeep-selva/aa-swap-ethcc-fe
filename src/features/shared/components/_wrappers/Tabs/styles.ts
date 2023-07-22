import styled, { css } from 'styled-components'

import { TTabSize } from '.'

type TitleStyleProps = {
  color: string
  extendBottomLine: boolean
  active: boolean
  size: TTabSize
}

type TitlesWrapperProps = {
  activeTab: number
  color: string
  tabsLength: number
  size: TTabSize
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const transformModifier = {
  M: (activeTab: number) => css`
    transform: translateX(calc(${activeTab} * 100%));
  `,
  S: (activeTab: number) => css`
    transform: translateX(calc(${activeTab} * 100%));
  `
}

const widthModifier = {
  M: () => css`
    width: 16.2rem;
  `,
  S: () => css`
    width: 7.5rem;
  `
}

export const TitlesWrapper = styled.div<TitlesWrapperProps>`
  ${({ theme, color, activeTab, size = 'S' }) => css`
    position: relative;
    display: flex;
    height: 3.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      height: 100%;
      z-index: 0;
      background: transparent;
      border-bottom: 2px solid ${theme.colors[color!]};
      transition: transform 0.5s;
      ${widthModifier[size]()}
      ${transformModifier[size](activeTab)};
    }
  `}
`

export const Title = styled.div<TitleStyleProps>`
  ${({ theme, active, size, extendBottomLine = false }) => css`
    cursor: pointer;
    display: flex;
    ${widthModifier[size]()}
    justify-content: center;
    align-items: center;
    padding-bottom: 1.4rem;
    transition: all 0.75s;
    column-gap: 0.8rem;
    color: ${active ? theme.colors.white : theme.colors.gray500};
    ${!extendBottomLine && `border-bottom: 1px solid ${theme.colors.gray600}`};

    svg {
      margin-top: 0.2rem;
    }

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`

export const BodyWrapper = styled.div<{ extendBottomLine: boolean }>`
  ${({ theme, extendBottomLine = false }) => css`
    --tabTitleHeight: 6.5rem;

    display: flex;
    flex: 1;
    padding: 3rem 0;
    min-height: 15rem;
    transition: all 1s;
    height: calc(100% - var(--tabTitleHeight));
    ${extendBottomLine && `border-top: 1px solid ${theme.colors.gray600}`};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    color: ${theme.colors.white};
    transition: all 1s;
  `}
`
