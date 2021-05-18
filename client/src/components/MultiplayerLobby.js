import React from "react";
import { Container } from "react-bootstrap";
import LobbyForm from "./LobbyForm";

function MultiplayerLobby({ id, onIdSubmit, getGameStarted }) {
  console.log(id);
  return (
    <Container
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ height: "100vh" }}
    >
      <h1 className='pb-5'>DrawIT</h1>
      {id ? <h1>lobby</h1> : <LobbyForm onIdSubmit={onIdSubmit} />}
    </Container>
  );
}

export default MultiplayerLobby;
