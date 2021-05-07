import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Canvas from "./Canvas";

function Game() {
  const [drawing, setDrawing] = useState([]);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setCanvasSize({
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.8,
    });
  }, []);

  const updateDrawing = (d) => {
    setDrawing(d);
  };

  window.addEventListener("resize", (e) => {
    const { innerWidth, innerHeight } = e.target;
    setCanvasSize({ width: innerWidth, height: innerHeight });
  });

  return (
    <Container
      className='d-flex flex-column align-items-center'
      style={{ width: "100vh", height: "100vh" }}
    >
      <h1>Game</h1>
      <Canvas updateDrawing={updateDrawing} canvasSize={canvasSize} />
    </Container>
  );
}

export default Game;
