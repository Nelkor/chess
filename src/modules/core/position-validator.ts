import { Position } from '@core/core-types'

export const validatePosition = (position: Position): boolean =>
  Boolean(position.units.length)
