import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const startGame = () => history.push("/game");

  return (
    <Container
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ width: "100vh", height: "100vh" }}
    >
      <h1 style={{ fontSize: 80 }}>DrawIT</h1>
      <Button
        className='m-3'
        style={{ width: 100, height: 40 }}
        onClick={startGame}
      >
        Sand-box
      </Button>
    </Container>
  );
}

export default Home;
