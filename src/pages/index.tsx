import { AbstractSwapWrapper, LimitOrder } from '@/features/console'

export default function Index() {
  return <LimitOrder />
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <AbstractSwapWrapper>{page}</AbstractSwapWrapper>
}
