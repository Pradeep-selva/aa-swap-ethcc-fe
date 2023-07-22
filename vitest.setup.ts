import { vitest } from 'vitest'
import 'vitest-canvas-mock'

vitest.mock('@next/font/local', () => ({
  __esModule: true,
  default: () => ({
    style: {
      fontFamily: 'Arial',
      fillStyle: ''
    }
  })
}))
