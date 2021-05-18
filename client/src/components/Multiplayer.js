import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import MultiplayerGame from "./MultiplayerGame";
import MultiplayerLobby from "./MultiplayerLobby";

function Multiplayer() {
  const [id, setId] = useLocalStorage("id");
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div>
      {gameStarted ? (
        <MultiplayerGame />
      ) : (
        <MultiplayerLobby
          id={id}
          onIdSubmit={setId}
          setGameStarted={setGameStarted}
        />
      )}
    </div>
  );
}

export default Multiplayer;
