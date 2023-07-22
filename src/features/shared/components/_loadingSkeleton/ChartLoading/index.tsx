import { useMemo } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import {
  ChartLoadingS,
  ChartLoadingM,
  ChartLoadingL,
  ChartLoadingXL,
  LottieReader
} from '@/features/shared'

export default function ChartLoading() {
  const { currentSize } = useWindowSize()
  const animationData = useMemo(() => {
    switch (true) {
      case currentSize <= 544:
        return ChartLoadingS
      case currentSize <= 600:
        return ChartLoadingM
      case currentSize <= 640:
        return ChartLoadingL
      default:
        return ChartLoadingXL
    }
  }, [currentSize])

  return <LottieReader loop animationData={animationData} />
}
