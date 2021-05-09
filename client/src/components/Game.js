import React, { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import Canvas from "./Canvas";

function Game() {
  const [drawing, setDrawing] = useState([]);

  const updateDrawing = (d) => {
    setDrawing(d);
  };

  const saveDrawing = () => {
    // save current drawing to server
  };

  const discardDrawing = () => {
    //reset canvas
  };

  return (
    <Container
      className='d-flex flex-column align-items-center'
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1 className='m-3'>DrawIT</h1>
      <Canvas updateDrawing={updateDrawing} />
      <InputGroup className='btn btn-default'>
        <Button onClick={saveDrawing}>Submit</Button>
        <Button onClick={discardDrawing}>Discard</Button>
      </InputGroup>
    </Container>
  );
}

export default Game;
