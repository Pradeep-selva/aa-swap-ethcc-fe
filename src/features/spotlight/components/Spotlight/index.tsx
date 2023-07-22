import React, { useCallback, useEffect, useMemo } from 'react'
import Router from 'next/router'

import { mapAssetToSItem } from '../../mappers/mappers'
import useSpotlightStore, { SpotlightState } from '../../store'
import { ActionConfig, TAsset } from '@/features/console'
import { Button, Modal, SearchActionBar, SearchItem } from '@/features/shared'

import * as S from './styles'

type SpotlightProps = {
  assets: TAsset[]
}

export default function Spotlight({ assets }: SpotlightProps) {
  const {
    spotlightState,
    selectedAsset,
    availableActions,
    customSpotlightIdleView,
    customSpotlightComponent,
    setSelectedAsset,
    clearSelectedAsset,
    setSelectedAction,
    setSpotlightState,
    setCustomSpotlightComponent
  } = useSpotlightStore((store) => store)

  const assetsList = useMemo(
    () => [
      {
        categoryTitle: 'Assets',
        items: assets.map((asset) => mapAssetToSItem(asset))
      }
    ],
    [assets]
  )

  //   const actionsList = useMemo(
  //     () => groupActionsByCategory(selectedAsset?.actions || []),
  //     [selectedAsset?.actions]
  //   )

  //   const availableActionsList = useMemo(
  //     () => groupActionsByCategory(availableActions || []),
  //     [availableActions]
  //   )

  const handleAssetSelect = useCallback(
    (asset: TAsset) => {
      setSelectedAsset(asset)
      setSelectedAction(null)
      setSpotlightState(SpotlightState.SELECTING_ACTION)
    },
    [setSelectedAsset, setSelectedAction, setSpotlightState]
  )

  const handleRemoveSelectedAsset = useCallback(() => {
    clearSelectedAsset()
    setSpotlightState(SpotlightState.SELECTING_ASSET)
  }, [clearSelectedAsset, setSpotlightState])

  const handleActionSelect = useCallback(
    (action: ActionConfig) => {
      setSelectedAction(action)
      if (action.category === 'strategy') {
        //@TODO: uncomment when strategies are implemented after release 1
        // setSpotlightState(SpotlightState.VIEWING_STRATEGY)
        // Router.push(
        //   `/account/strategies/${action.metadata?.baseEntityId}`,
        //   undefined,
        //   { shallow: true }
        // )
      } else if (action.category === 'automation') {
        setSpotlightState(SpotlightState.IDLE)
        Router.push(
          `/account/automations/${action.metadata?.baseEntityId}`,
          undefined,
          { shallow: true }
        )
      } else if (action.category === 'action') {
        if (action.spotlightCustomView) {
          setCustomSpotlightComponent(action.spotlightCustomView)
          setSpotlightState(SpotlightState.DISPLAYING_CUSTOM_COMPONENT)
        } else if (action.handleActionSpotlightClick) {
          action.handleActionSpotlightClick(action)
          setSpotlightState(SpotlightState.IDLE)
        }
      }
    },
    [setSpotlightState, setSelectedAction, setCustomSpotlightComponent]
  )

  const resetSpotlightHandler = useCallback(() => {
    clearSelectedAsset()
    setSpotlightState(SpotlightState.IDLE)
  }, [clearSelectedAsset, setSpotlightState])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        resetSpotlightHandler()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [setSpotlightState, clearSelectedAsset, resetSpotlightHandler])

  // useEffect(() => {
  //   setSelectedAction(null)
  // }, [selectedAsset, setSelectedAction])

  const spotlightComponent = useMemo(() => {
    switch (spotlightState) {
      case SpotlightState.IDLE:
        return (
          customSpotlightIdleView || (
            <Button
              onClick={() => setSpotlightState(SpotlightState.SELECTING_ASSET)}
              buttonSize="L"
            >
              Asset
            </Button>
          )
        )

      case SpotlightState.SELECTING_ASSET:
        return (
          <Modal onClickOutside={resetSpotlightHandler} isOpen>
            <SearchActionBar<TAsset>
              selectedAsset={selectedAsset}
              items={assetsList}
              searchText="Search assets"
              removeAsset={handleRemoveSelectedAsset}
              handleSelect={(asset: SearchItem<TAsset>) => {
                if (!asset.data) return
                handleAssetSelect(asset.data)
              }}
            />
          </Modal>
        )

      case SpotlightState.SELECTING_ACTION:
        return (
          <Modal onClickOutside={resetSpotlightHandler} isOpen>
            <SearchActionBar<ActionConfig>
              selectedAsset={selectedAsset}
              items={availableActions}
              removeAsset={handleRemoveSelectedAsset}
              handleSelect={(action: SearchItem<ActionConfig>) => {
                if (!action.data) return
                handleActionSelect(action.data)
              }}
            />
          </Modal>
        )

      case SpotlightState.VIEWING_STRATEGY:
        return customSpotlightIdleView
      case SpotlightState.DISPLAYING_CUSTOM_COMPONENT:
        return (
          <Modal onClickOutside={resetSpotlightHandler} isOpen>
            {customSpotlightComponent}
          </Modal>
        )
      default:
        return <div>Missing state</div>
    }
  }, [
    spotlightState,
    assetsList,
    selectedAsset,
    availableActions,
    customSpotlightIdleView,
    customSpotlightComponent,
    setSpotlightState,
    handleAssetSelect,
    handleRemoveSelectedAsset,
    handleActionSelect,
    resetSpotlightHandler
  ])

  return <S.SpotlightWrapper>{spotlightComponent}</S.SpotlightWrapper>
}
