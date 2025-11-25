export type PieceType = "red" | "black" | null;

export type PieceData = {
  type: PieceType;
  isKing: boolean;
};

export type Position = {
  row: number;
  col: number;
};

export const BOARD_SIZE = 8;
