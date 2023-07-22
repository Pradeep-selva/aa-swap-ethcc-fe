import { create } from 'zustand'

import { Action, ActionConfig, TAsset } from '@/features/console'
import { groupActionsByCategory } from '../mappers/mappers'

export enum SpotlightState {
  IDLE = 'IDLE',
  SELECTING_ASSET = 'SELECTING_ASSET',
  SELECTING_ACTION = 'SELECTING_ACTION',
  DISPLAYING_CUSTOM_IDLE_VIEW = 'DISPLAYING_CUSTOM_IDLE_VIEW',
  DISPLAYING_CUSTOM_COMPONENT = 'DISPLAYING_CUSTOM_COMPONENT',
  VIEWING_STRATEGY = 'VIEWING_STRATEGY',
  VIEWING_AUTOMATION = 'VIEWING_AUTOMATION'
}

type SpotlightStore = {
  spotlightState: keyof typeof SpotlightState
  selectedAsset: TAsset | null
  availableActions: any[] // ActionConfig[]
  selectedAction: Action | null
  customSpotlightComponent?: React.ReactNode
  customSpotlightIdleView?: React.ReactNode
  setSelectedAsset: (asset: TAsset) => void
  setSelectedAction: (action: ActionConfig | null) => void
  setSpotlightState: (state: keyof typeof SpotlightState) => void
  setCustomSpotlightComponent: (view: React.ReactNode) => void
  setCustomSpotlightIdleView: (IdleView: React.ReactNode) => void
  resetSpotlightState: () => void
  clearSelectedAsset: () => void
}

const useSpotlightStore = create<SpotlightStore>((set) => ({
  spotlightState: SpotlightState.IDLE,
  availableActions: [],
  actionsConfig: [],
  selectedAsset: null,
  selectedAction: null,
  customSpotlightComponent: null,
  customSpotlightIdleView: null,
  setSelectedAsset: (asset: TAsset) =>
    set({
      selectedAsset: asset,
      availableActions: groupActionsByCategory(asset.actions) // ? Maybe leave just asset.actions
    }),
  setSelectedAction: (action: ActionConfig | null) =>
    set({ selectedAction: action }),
  setSpotlightState: (state: keyof typeof SpotlightState) =>
    set({ spotlightState: state }),
  setCustomSpotlightComponent: (view: React.ReactNode) =>
    set({
      customSpotlightComponent: view
    }),
  setCustomSpotlightIdleView: (idleView: React.ReactNode) =>
    set({
      customSpotlightIdleView: idleView
    }),
  clearSelectedAsset: () => set({ selectedAsset: null }),
  resetSpotlightState: () =>
    set({
      selectedAction: null,
      selectedAsset: null,
      spotlightState: SpotlightState.IDLE
    })
}))

export default useSpotlightStore
