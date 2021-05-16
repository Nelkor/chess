import { createCtx } from 'ctx-2d'

const parent = document.querySelector('.canvas-wrapper')

export let side = 0
export let cellSide = 0

export const ctx = createCtx(parent, {
  resizeCallback(ctx) {
    const { width, height } = ctx.canvas

    side = Math.min(width, height)
    cellSide = side / 8
  },
  limits: {
    width: 1024,
    height: 1024,
  },
})
