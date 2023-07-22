import { LottieReader } from '@/features/shared'

type InlineLottieWrapperProps = {
  lotties: any[]
  isStopped: boolean
}

export default function InlineLottieWrapper({
  lotties,
  isStopped
}: InlineLottieWrapperProps) {
  return (
    <>
      {lotties.map((lottie, idx) => (
        <span key={idx}>
          <LottieReader isStopped={isStopped} loop animationData={lottie} />
        </span>
      ))}
    </>
  )
}
