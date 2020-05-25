import React from 'react';
import './App.css';
import Board from "./components/board";

function App() {
  return (
    <div className="App">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
      </div>
    </div>
  );
}

export default App;
