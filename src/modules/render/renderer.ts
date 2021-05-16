import { side, ctx } from './canvas'

const draw = () => {
  requestAnimationFrame(draw)

  ctx.clearRect(0, 0, side, side)
}

export const startRender = (): void => {
  requestAnimationFrame(draw)
}
