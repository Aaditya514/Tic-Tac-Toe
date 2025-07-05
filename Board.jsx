import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const isWinner = checkWinner();
  const isDraw = !isWinner && state.every(cell => cell !== null);

  const handleClick = (index) => {
    if (state[index] || isWinner) return;
    const newState = [...state];
    newState[index] = isXTurn ? "X" : "O";
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isWinner ? (
        <>
          {isWinner} won the game.{" "}
          <button onClick={handleReset} className="text-blue-700">Play Again</button>
        </>
      ) : isDraw ? (
        <>
          It's a draw!{" "}
          <button onClick={handleReset} className="text-blue-700">Play Again</button>
        </>
      ) : (
        <>
          <div>
            <h4 className="p-5 text-4xl">Player {isXTurn ? "X" : "O"} please move.</h4>
            <div className="flex">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="flex">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="flex">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
