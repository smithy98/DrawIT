import React, { useState, useRef, useEffect } from "react";

function Canvas({ updateDrawing }) {
  const [isPainting, setIsPainting] = useState(false);
  const [line, setLine] = useState([]);
  const [prevPos, setPrevPos] = useState({ offsetX: 0, offsetY: 0 });

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;

    contextRef.current = ctx;
  }, []);

  const onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setIsPainting(true);
    setPrevPos({ offsetX, offsetY });
  };

  const endPaintEvent = () => {
    if (isPainting) {
      setIsPainting(false);
      updateDrawing(line);
    }
  };

  const onMouseMove = ({ nativeEvent }) => {
    if (isPainting) {
      const { offsetX, offsetY } = nativeEvent;
      const offsetData = { offsetX, offsetY };

      const positionData = {
        start: { ...prevPos },
        stop: { ...offsetData },
      };

      setLine((prevLine) => {
        return prevLine.concat([positionData]);
      });

      paint(prevPos, offsetData);
    }
  };

  const paint = (prevPos, currPos) => {
    const { offsetX, offsetY } = currPos;
    const { offsetX: x, offsetY: y } = prevPos;

    contextRef.current.beginPath();
    contextRef.current.strokeStyle = "#000";
    contextRef.current.moveTo(x, y);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    setPrevPos({ offsetX, offsetY });
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        margin: "auto",
        background: "#fff",
        outline: "#000 solid 3px",
      }}
      onMouseDown={onMouseDown}
      onMouseLeave={endPaintEvent}
      onMouseUp={endPaintEvent}
      onMouseMove={onMouseMove}
    />
  );
}

export default Canvas;
