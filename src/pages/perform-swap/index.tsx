import React from 'react'

import { AbstractSwapWrapper, PerformSwap } from '@/features/console'

export default function PerformSwapPage() {
  return <PerformSwap />
}

PerformSwapPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AbstractSwapWrapper>{page}</AbstractSwapWrapper>
}
