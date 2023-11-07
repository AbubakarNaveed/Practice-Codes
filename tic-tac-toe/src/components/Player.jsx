import React from "react";

const Player = ({ name, symbol, isActive }) => {
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default Player;
