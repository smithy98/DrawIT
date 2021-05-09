import React, { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import Canvas from "./Canvas";

function MultiplayerGame() {
  const [promptList, setPromptList] = useState(["cat", "dog", "bird"]);
  const [drawing, setDrawing] = useState([]);

  const updateDrawing = (d) => {
    setDrawing(d);
  };

  const submitDrawing = () => {};

  const clearDrawing = () => {};

  return (
    <Container className='d-flex flex-column align-items-center'>
      <h1>DrawIT</h1>
      <h4 className='m-3'>{promptList[0]}</h4>
      <Canvas updateDrawing={updateDrawing}></Canvas>
      <InputGroup className='btn btn-default m-3'>
        <Button onClick={submitDrawing}>Submit</Button>
        <Button onClick={clearDrawing}>Clear</Button>
      </InputGroup>
    </Container>
  );
}

export default MultiplayerGame;
