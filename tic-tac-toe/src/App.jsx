import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  return (
    <main>
      {/* <h1>React Tic-Tac-Toe</h1> */}
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player-1"
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player-2"
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard changeActive={setActivePlayer} symbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
