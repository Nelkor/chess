type Point = [number, number]

enum UnitKinds {
  king,
  queen,
  rook,
  bishop,
  knight,
  pawn,
}

enum Colors {
  black,
  white,
}

type UnitBasics = {
  kind: UnitKinds
  color: Colors
  moveCount: number
  point: Point
}

type King = UnitBasics & { kind: UnitKinds.king }
type Queen = UnitBasics & { kind: UnitKinds.queen }
type Rook = UnitBasics & { kind: UnitKinds.rook }
type Bishop = UnitBasics & { kind: UnitKinds.bishop }
type Knight = UnitBasics & { kind: UnitKinds.knight }

type Pawn = UnitBasics & {
  kind: UnitKinds.pawn
  justHasMadeDoubleMove: boolean
}

export type ChessUnit = King | Queen | Rook | Bishop | Knight | Pawn

export type Position = {
  turn: Colors
  units: ChessUnit[]
}
