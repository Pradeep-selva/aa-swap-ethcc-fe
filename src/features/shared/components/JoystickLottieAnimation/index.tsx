import LottieReader from '../LottieReader'
import { JoystickLottie } from '../../assets'

import * as S from './styles'

type JoystickLottieAnimationProps = {
  completed: () => void
}

export default function JoystickLottieAnimation({
  completed
}: JoystickLottieAnimationProps) {
  return (
    <S.MainWrapper>
      <S.LottieWrapper>
        <LottieReader
          onAnimationEnd={completed}
          animationData={JoystickLottie}
        />
      </S.LottieWrapper>
    </S.MainWrapper>
  )
}
