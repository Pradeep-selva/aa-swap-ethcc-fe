import React from 'react'

import { AbstractSwapWrapper, LimitOrder } from '@/features/console'

export default function LimitOrderPage() {
  return <LimitOrder />
}

LimitOrderPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AbstractSwapWrapper>{page}</AbstractSwapWrapper>
}
