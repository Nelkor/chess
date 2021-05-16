import { side, cellSide, ctx } from './canvas'

const draw = () => {
  requestAnimationFrame(draw)

  ctx.fillStyle = '#776666'
  ctx.fillRect(0, 0, side, side)
  ctx.fillStyle = '#eedddd'

  for (let i = 0; i < 8; i++) {
    for (let j = i % 2; j < 8; j += 2) {
      ctx.fillRect(j * cellSide, i * cellSide, cellSide, cellSide)
    }
  }
}

export const startRender = (): void => {
  requestAnimationFrame(draw)
}
