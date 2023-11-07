import React, { useState } from "react";
import "../index.css";
const intialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const winningCombitnations = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];

const GameBoard = ({ changeActive, symbol }) => {
  const [gameBoard, setGameBoard] = useState(intialBoard);
  const checkWinner = () => {
    let drawMoniter = 0;

    for (const winnerMove of winningCombitnations) {
      let player_1 = 0;
      let player_2 = 0;

      for (let i = 0; i < winnerMove.length; i++) {
        const { row, col } = winnerMove[i];
        // console.log(row, col);
        // if (gameBoard[row][col] === null) {
        //   break;
        // } else {
        //   if (gameBoard[row][col] === "X") {
        //     player_1 = player_1 + 1;
        //   } else if (gameBoard[row][col] === "O") {
        //     player_2 = player_2 + 1;
        //   }
        // }
        console.log(gameBoard[row][col]);
      }
      if (player_1 === 3) {
        console.log = "Player_1 is winner";
      }
      if (player_2 === 3) {
        console.log("Player_2 is Winner");
      }
    }
  };
  const handleChangeGame = async (rowIndex, colIndex, symbol) => {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      //console.log(updatedBoard);
      return updatedBoard;
    });
    await changeActive((prev) => {
      if (prev === "X") {
        return "O";
      } else {
        return "X";
      }
    });
    checkWinner();
    // console.log(gameBoard);
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => handleChangeGame(rowIndex, colIndex, symbol)}
                    disabled={col != null}
                  >
                    {col}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
