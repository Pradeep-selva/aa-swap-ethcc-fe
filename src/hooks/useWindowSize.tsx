import { useEffect, useState } from 'react'
import { customMediaBreakpoints } from '@/lib/styledComponents'

const breakpoints = customMediaBreakpoints

export default function useWindowSize() {
  const [screenSize, setScreenSize] = useState({
    isSmall: false,
    isMedium: false,
    isMediumLarge: false,
    isLarge: false,
    isHuge: false,
    currentSize: 0
  })

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        isSmall: window.innerWidth <= breakpoints.small,
        isMedium:
          window.innerWidth > breakpoints.small &&
          window.innerWidth <= breakpoints.medium,
        isMediumLarge:
          window.innerWidth > breakpoints.medium &&
          window.innerWidth <= breakpoints.large,
        isLarge:
          window.innerWidth > breakpoints.large &&
          window.innerWidth <= breakpoints.huge,
        isHuge: window.innerWidth > breakpoints.huge,
        currentSize: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isSmall: screenSize.isSmall,
    isMedium: screenSize.isMedium,
    isMediumLarge: screenSize.isMediumLarge,
    isLarge: screenSize.isLarge,
    isHuge: screenSize.isHuge,
    currentSize: screenSize.currentSize
  }
}
