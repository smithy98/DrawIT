import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import MultiplayerGame from "./MultiplayerGame";
import MultiplayerLobby from "./MultiplayerLobby";

function Multiplayer() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div>
      {id ? <MultiplayerGame /> : <MultiplayerLobby onIdSubmit={setId} />}
    </div>
  );
}

export default Multiplayer;
