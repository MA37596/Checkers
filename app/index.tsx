import { Dimensions, StyleSheet, View } from "react-native";
import Board from "./Board";

const { width } = Dimensions.get("window");
const CELL_SIZE = Math.floor(width / 8) - 10;

export default function Index() {
  const mockBoard = Array(8).fill(null).map(() => Array(8).fill(null));
  const mockStyles = StyleSheet.create({
    board: { borderWidth: 3, borderColor: "#8b4513" },
    row: { flexDirection: "row" },
    cell: { width: CELL_SIZE, height: CELL_SIZE, justifyContent: "center", alignItems: "center" },
    whiteCell: { backgroundColor: "#f5deb3" },
    blackCell: { backgroundColor: "#8b4513" },
    selectedCell: { backgroundColor: "#ffd700" },
    possibleMoveCell: { backgroundColor: "#90ee90" },
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Board 
        board={mockBoard}
        selectedPiece={null}
        possibleMoves={[]}
        onCellPress={() => {}}
        renderPiece={() => null}
        cellSize={CELL_SIZE}
        styles={mockStyles}
      />
    </View>
  );
}
