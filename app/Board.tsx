import { TouchableOpacity, View } from "react-native";
import { PieceData, Position } from "../types";

interface BoardProps {
  board: (PieceData | null)[][];
  selectedPiece: Position | null;
  possibleMoves: Position[];
  onCellPress: (row: number, col: number) => void;
  renderPiece: (piece: PieceData) => React.ReactNode;
  cellSize: number;
  styles: any;
}

export default function Board({ 
  board, 
  selectedPiece, 
  possibleMoves, 
  onCellPress, 
  renderPiece, 
  cellSize, 
  styles 
}: BoardProps) {
  const renderCell = (row: number, col: number) => {
    const isBlackSquare = (row + col) % 2 === 1;
    const piece = board[row][col];
    const isSelected = selectedPiece?.row === row && selectedPiece?.col === col;
    const isPossibleMove = possibleMoves.some(move => move.row === row && move.col === col);

    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[
          styles.cell,
          isBlackSquare ? styles.blackCell : styles.whiteCell,
          isSelected && styles.selectedCell,
          isPossibleMove && styles.possibleMoveCell
        ]}
        onPress={() => onCellPress(row, col)}
      >
        {piece && renderPiece(piece)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
        </View>
      ))}
    </View>
  );
}
