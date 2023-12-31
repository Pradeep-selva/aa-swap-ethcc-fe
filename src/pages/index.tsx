import { AbstractSwapWrapper, PerformSwap } from '@/features/console'

export default function Index() {
  return <PerformSwap />
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <AbstractSwapWrapper>{page}</AbstractSwapWrapper>
}
