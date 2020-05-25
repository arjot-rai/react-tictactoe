import React, {useState} from "react";
import ReactDOM from "react-dom";
import Square from "./square";

function Board(){
  const [status, setStatus] = useState('Next player: X');
  const [squares, setSquares] = useState(Array.from(Array(9), () => ''));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([{sq: Array.from(Array(9), () => '')}])

  function renderSquare(i){
      // console.log(squares[i])
      // console.log(squares);
      return(<Square val={squares[i]} onClick={() => handleClick(i)} />)
  }

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return sq[a];
    }
  }
  return null;
}

  function handleClick(i){
    const winner = calculateWinner(squares);

    if(squares[i] || winner){
      return;
    }

    const tempSquares = squares.slice();
    tempSquares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(tempSquares);
    var tempHistory = history;
    tempHistory.push({sq:tempSquares});
    setHistory(tempHistory);
    // console.log(history);
  }

  function startNew(){
    setXIsNext(true);
    setSquares(Array.from(Array(9), () => ''));
    setHistory([]);
  }

  function undoGame(){
    if(history.length > 1){
      setXIsNext(prev => !prev);

      // console.log(history)

      var i =0;
      var tempSquare = squares.slice();
      var {sq} = history[history.length-2];

      var tempHistory = history.slice();
      tempHistory.pop();
      setHistory(tempHistory)
      // console.log(tempSquare)
      setSquares(sq);

    }
  }


  return(
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{calculateWinner(squares) ? 'Winner: ' + calculateWinner(squares) : 'Next player: ' + (xIsNext ? 'X' : 'O')}</div>
      <div className="control">
        <button onClick={startNew}>New Game</button>
        <button onClick={undoGame}>Undo</button>
      </div>
    </div>
  );
}

export default Board;
