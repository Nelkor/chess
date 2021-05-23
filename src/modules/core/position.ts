import { Colors, Position, UnitKinds } from '@core/core-types'

export const position: Position = {
  turn: Colors.white,
  units: [
    {
      kind: UnitKinds.king,
      color: Colors.white,
      moveCount: 0,
      point: [4, 0],
    },
    {
      kind: UnitKinds.king,
      color: Colors.black,
      moveCount: 0,
      point: [4, 7],
    },
  ],
}
