import React, { useMemo } from 'react'
import Lottie from 'react-lottie'

export type LottieEventName =
  | 'complete'
  | 'loopComplete'
  | 'enterFrame'
  | 'segmentStart'
  | 'config_ready'
  | 'data_ready'
  | 'loaded_images'
  | 'DOMLoaded'
  | 'destroy'

type LottieReaderProps = {
  animationData: any
  height?: string | number
  width?: string | number
  loop?: boolean
  autoplay?: boolean
  isStopped?: boolean
  isPaused?: boolean
  direction?: number
  isClickToPauseDisabled?: boolean
  onAnimationEnd?: () => void
  margin?: string
  eventListeners?: Array<{
    eventName: LottieEventName
    callback: () => void
  }>
}

type LottieEventListener = {
  eventName: LottieEventName
  callback: () => void
}

export default function LottieReader({
  width = '100%',
  height = '100%',
  animationData,
  loop = false,
  isPaused = false,
  autoplay = true,
  eventListeners = [],
  isStopped = false,
  isClickToPauseDisabled = false,
  direction,
  margin = '0 auto',
  onAnimationEnd
}: LottieReaderProps) {
  const handleAnimationEnd = () => {
    onAnimationEnd?.()
  }

  const updatedEventListeners: ReadonlyArray<LottieEventListener> =
    useMemo(() => {
      if (onAnimationEnd) {
        return Object.freeze([
          ...eventListeners,
          { eventName: 'complete', callback: handleAnimationEnd }
        ])
      } else {
        return eventListeners
      }
    }, [onAnimationEnd, eventListeners])

  const defaultOptions = useMemo(
    () => ({
      loop,
      autoplay,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: ''
      }
    }),
    [animationData, loop, autoplay]
  )
  return (
    <Lottie
      options={defaultOptions}
      eventListeners={updatedEventListeners}
      height={height}
      width={width}
      isStopped={isStopped}
      isPaused={isPaused}
      direction={direction}
      isClickToPauseDisabled={isClickToPauseDisabled}
      style={{ margin: margin }}
    />
  )
}
